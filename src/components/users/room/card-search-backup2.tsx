import Link from 'next/link';
import { LuSearch, LuArrowLeft } from 'react-icons/lu';
import { useRouter, useSearchParams } from 'next/navigation';
import useRoomFilterStore from '@/lib/store/useRoomFilterStore';
import { convertToUtcFormat, formatDateForQuery, formatDateToID } from '@/lib/utils/dateUtils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React, { useCallback, useMemo } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@/hooks/use-debounce';
import { getGlobalSearch } from '@/lib/search/actions/get-global-search';
import { InputWithIcon } from '@/components/ui/input-with-icon';
import { FiSearch } from 'react-icons/fi';
import type { SearchResult } from '@/types/search';

interface SearchState {
  searchTerm: string;
  searchValue: string | null;
  dateSearch: Date | undefined;
  attendeesSearch: string;
  searchCategory: string;
  selectedRoomId: string | null;
  isDialogSearchOpen: boolean;
}

export default function UserRoomCardSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    category,
    categoryValue,
    date,
    attendees,
    setCategory,
    setDate,
    setAttendees,
  } = useRoomFilterStore();

  // Initialize state with custom hook
  const [searchState, setSearchState] = React.useState<SearchState>({
    searchTerm: '',
    searchValue: categoryValue,
    dateSearch: undefined,
    attendeesSearch: '1',
    searchCategory: 'City',
    selectedRoomId: null,
    isDialogSearchOpen: false,
  });

  const debouncedSearchTerm = useDebounce(searchState.searchTerm, 500);

  // Memoize date formatting
  const formattedDateSearch = useMemo(() => {
    if (!searchState.dateSearch) return '';
    return new Intl.DateTimeFormat("id-ID", { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(searchState.dateSearch);
  }, [searchState.dateSearch]);

  // Memoize search query
  const { data: searchData, isLoading: isLoadingSearchData, isError: isErrorSearchData } = useQuery({
    queryKey: ['global-search', debouncedSearchTerm],
    queryFn: () => getGlobalSearch(debouncedSearchTerm),
    enabled: debouncedSearchTerm.length > 2,
    staleTime: 5000,
    refetchOnWindowFocus: false
  });

  // Extract URL parameters
  const {
    detectedCategory,
    detectedValue,
    attendeesParam,
    dateParamUtc,
    formattedDate
  } = useMemo(() => {
    const dynamicCategoryMapping = ['room', 'floor', 'building', 'city'];
    let detectedCategory: string | null = null;
    let detectedValue: string | null = null;

    for (const key of dynamicCategoryMapping) {
      const value = searchParams.get(key);
      if (value) {
        detectedCategory = key;
        detectedValue = value;
        break;
      }
    }

    const dateParam = searchParams.get('date');
    const attendeesParam = searchParams.get('attendees') || '1';
    const dateParamUtc = dateParam ? convertToUtcFormat(dateParam) : '';
    const formattedDate = dateParam ? formatDateToID(dateParam) : '';

    return {
      detectedCategory,
      detectedValue,
      dateParam,
      attendeesParam,
      dateParamUtc,
      formattedDate
    };
  }, [searchParams]);

  // Update store based on URL parameters
  React.useEffect(() => {
    if (detectedCategory !== category || detectedValue !== categoryValue) {
      setCategory(detectedCategory || 'Unknown', detectedValue || 'N/A');
    }
    if (dateParamUtc !== date) setDate(dateParamUtc);
    if (attendeesParam !== attendees?.toString()) setAttendees(Number(attendeesParam));
  }, [detectedCategory, detectedValue, dateParamUtc, attendeesParam, category, categoryValue, date, attendees, setCategory, setDate, setAttendees]);

  // Handler functions
  const handleSelectItemSearch = useCallback((
    selectedSearch: string,
    categoryType: string,
    roomId?: string
  ) => {
    setSearchState(prev => ({
      ...prev,
      searchValue: selectedSearch,
      searchCategory: categoryType.toLowerCase(),
      selectedRoomId: roomId || null,
      isDialogSearchOpen: false
    }));
  }, []);

  const handleSearch = useCallback(() => {
    const queryParams = new URLSearchParams();

    if (searchState.attendeesSearch) {
      queryParams.append('attendees', searchState.attendeesSearch);
    }

    if (searchState.dateSearch) {
      queryParams.append('date', formatDateForQuery(searchState.dateSearch));
    }

    const baseUrl = '/room';
    let finalUrl = `${baseUrl}/search?${queryParams.toString()}`;

    if (searchState.searchCategory === 'room' && searchState.selectedRoomId) {
      finalUrl = `${baseUrl}/${searchState.selectedRoomId}?${queryParams.toString()}`;
    } else if (searchState.searchCategory === "building") {
      queryParams.append('building', searchState.searchValue || '');
      finalUrl = `${baseUrl}/search?${queryParams.toString()}`;
    } else if (searchState.searchCategory && searchState.searchValue) {
      queryParams.append(searchState.searchCategory, searchState.searchValue);
    }

    router.push(finalUrl);
  }, [router, searchState]);

  const handleDateSelect = useCallback((date: Date | undefined) => {
    setSearchState(prev => ({
      ...prev,
      dateSearch: date
    }));
  }, []);

  const handleAttendeesChange = useCallback((value: string) => {
    setSearchState(prev => ({
      ...prev,
      attendeesSearch: value
    }));
  }, []);

  const handleSearchTermChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(prev => ({
      ...prev,
      searchTerm: e.target.value
    }));
  }, []);

  const handleDialogOpenChange = useCallback((open: boolean) => {
    setSearchState(prev => ({
      ...prev,
      isDialogSearchOpen: open
    }));
  }, []);

  return (
    <div className="main-room-search-container w-full max-w-screen-xl mx-auto mb-1 md:mb-5 md:px-4">
      {/* Desktop Version */}
      <div className="hidden md:flex flex-row items-center w-full shadow-md bg-white border border-slate-200 h-14 rounded-md py-2 px-4 space-y-0">
        <div className="main-room-search-content flex flex-wrap h-full items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="icon-search w-6">
            <LuSearch size={16} />
          </div>

          <Dialog 
            open={searchState.isDialogSearchOpen} 
            onOpenChange={handleDialogOpenChange}
          >
            <DialogTrigger asChild>
              <div className="min-w-24 py-2 px-3 hover:bg-[#e8ebef] hover:text-[#1e3a5f] rounded-lg transition-all duration-300">
                <span className="text-base font-semibold">
                  {searchState.searchValue ?? categoryValue}
                </span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <h2 className="text-2xl text-[#303135]">Going Anywhere?</h2>
                </DialogTitle>
              </DialogHeader>

              <div className="flex-1 overflow-y-auto">
                <div className="sticky top-0 px-4 pt-2 pb-4 bg-white">
                  <InputWithIcon
                    icon={FiSearch}
                    defaultValue={""}
                    placeholder="Search by room name, building, location, etc."
                    value={searchState.searchTerm}
                    onChange={handleSearchTermChange}
                    className="w-full"
                  />

                  {isLoadingSearchData && (
                    <div className="mt-2 text-center text-gray-500">Searching...</div>
                  )}

                  {isErrorSearchData && (
                    <div className="mt-2 text-center text-red-500">
                      An error occurred during search
                    </div>
                  )}

                  {searchData && searchData.length > 0 && (
                    <div className="mt-2 border rounded-md shadow-sm max-h-60 overflow-y-auto">
                      {searchData.map((item: SearchResult) => (
                        <div
                          key={item.id}
                          onClick={() =>
                            handleSelectItemSearch(
                              item.name, 
                              item.type,
                              item.type === 'Room' || item.type === 'Building' ? item.id : undefined
                            )
                          }
                          className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <FiSearch className="mr-3 text-gray-500" size={20} />
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-gray-500">
                              {item.type} in {item.city}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <div className="divider-vertical mx-4">
            <div className="h-5 w-[1px] bg-slate-300 rounded-md"></div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <div className="min-w-24 py-2 px-3 hover:bg-[#e8ebef] hover:text-[#1e3a5f] rounded-lg transition-all duration-300">
                <span className="text-base font-semibold">
                  {formattedDateSearch || formattedDate}
                </span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <Calendar
                mode="single"
                selected={searchState.dateSearch}
                onSelect={handleDateSelect}
                initialFocus
                numberOfMonths={2}
                disabled={(date) => date < new Date()}
              />
            </DialogContent>
          </Dialog>

          <div className="divider-vertical mx-4">
            <div className="h-5 w-[1px] bg-slate-300 rounded-md"></div>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <div className="min-w-24 py-2 px-3 hover:bg-[#e8ebef] hover:text-[#1e3a5f] rounded-lg transition-all duration-300">
                <span className="text-base font-semibold">
                  {searchState.attendeesSearch || attendees} Attendees
                </span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Number of Attendees</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <input
                  type="number"
                  min="1"
                  value={searchState.attendeesSearch}
                  onChange={(e) => handleAttendeesChange(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="main-room-filter-button flex h-full items-center justify-center min-w-24 bg-[#e8ebef] rounded-md ml-auto text-[#1e3a5f]">
          <button
            className="text-base font-semibold"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden bg-white p-4">
        <div className="flex items-center justify-between">
          <button className="text-[#1e3a5f]">
            <Link href="/home">
              <LuArrowLeft size={20} />
            </Link>
          </button>

          <div className="flex-1 ml-2 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-[#1e3a5f]">
                {categoryValue || 'Going Anywhere?'}
              </span>
            </div>
            <div className="text-xs text-slate-600">
              {formattedDate} • {attendees} Attendees
            </div>
          </div>

          <button
            className="flex items-center gap-1 px-3 py-2 bg-[#e8ebef] text-[#1e3a5f] rounded-lg"
            onClick={handleSearch}
          >
            <span className="text-xs font-semibold">Change</span>
          </button>
        </div>
      </div>
    </div>
  );
}