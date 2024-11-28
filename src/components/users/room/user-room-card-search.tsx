/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import { LuSearch, LuArrowLeft } from 'react-icons/lu';
import { useRouter, useSearchParams } from 'next/navigation';
import useRoomFilterStore from '@/lib/store/useRoomFilterStore';
import { convertToUtcFormat, formatDateForQuery, formatDateToID } from '@/lib/utils/dateUtils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@/hooks/use-debounce';
import { getGlobalSearch } from '@/lib/search/actions/get-global-search';
import { InputWithIcon } from '@/components/ui/input-with-icon';
import { FiSearch } from 'react-icons/fi';
import { SearchResult } from '@/types/search';

export default function UserRoomCardSearch() {
  const searchParams = useSearchParams();
  const {
    // category,
    categoryValue,
    // date,
    attendees,
    setCategory,
    setDate,
    setAttendees,
  } = useRoomFilterStore();
  const [isDialogSearchOpen, setIsDialogSearchOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchValue, setSearchValue] = React.useState(categoryValue);
  const [dateSearch, setDateSearch] = React.useState<Date>();
  const [attendeesSearch, setAttendeesSearch] = React.useState("1");
  const [searchCategory, setSearchCategory] = React.useState("City");
  const [selectedRoomId, setSelectedRoomId] = React.useState<string | null>(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const router = useRouter();

  const formattedDateSearch = dateSearch
    ? new Intl.DateTimeFormat("id-ID", { 
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(dateSearch)
    : "";

  const { data: searchData, isLoading: isLoadingSearchData, isError: isErrorSearchData } = useQuery({
    queryKey: ['global-search', debouncedSearchTerm],
    queryFn: () => getGlobalSearch(debouncedSearchTerm),
    enabled: debouncedSearchTerm.length > 2,
    staleTime: 5000,
    refetchOnWindowFocus: false
  });
  // Identify category and value dynamically
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

  React.useEffect(() => {
    // Inisialisasi state filter dari query parameter
    if (detectedCategory && detectedValue) {
      setCategory(detectedCategory, detectedValue);
    }
    if (dateParamUtc) setDate(dateParamUtc);
    if (attendeesParam) setAttendees(Number(attendeesParam));
  }, [detectedCategory, detectedValue, dateParamUtc, attendeesParam]);

  const handleSelectItemSearch = (selectedSearch: string, categoryType: string, roomId?: string) => {
    setSearchValue(selectedSearch);
    setSearchCategory(categoryType.toLowerCase());
    setIsDialogSearchOpen(false);

    if (categoryType.toLowerCase() && roomId) {
      setSelectedRoomId(roomId);
    } else {
      setSelectedRoomId(null);
    }
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (attendees) {
      queryParams.append('attendees', attendeesSearch);
    }

    if (dateSearch) {
      queryParams.append('date', formatDateForQuery(dateSearch));
    }

    if (searchCategory === 'room' && selectedRoomId) {
      router.push(`/room/${selectedRoomId}?${queryParams.toString()}`);
    } else if(searchCategory === "building"){
      router.push(`/room/search?building=${searchValue}&${queryParams.toString()}`);
    }
    else {
      if (searchCategory && searchValue) {
        queryParams.append(searchCategory, searchValue);
      }
      router.push(`/room/search?${queryParams.toString()}`);
    }
  };


  return (
    <div className="main-room-search-container w-full max-w-screen-xl mx-auto mb-1 md:mb-5 md:px-4">
      {/* Desktop Version */}
      <div className="hidden md:flex flex-row items-center w-full shadow-md bg-white border border-slate-200 h-14 rounded-md py-2 px-4 space-y-0">
        <div className="main-room-search-content flex flex-wrap h-full items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="icon-search w-6">
            <LuSearch size={16} />
          </div>

          <Dialog open={isDialogSearchOpen} onOpenChange={setIsDialogSearchOpen}>
            <DialogTrigger asChild>
              <div className="min-w-24 py-2 px-3 hover:bg-[#e8ebef] hover:text-[#1e3a5f] rounded-lg transition-all duration-300">
                <span className="text-base font-semibold">
                  {searchValue ?? categoryValue}
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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                              item.type === 'Room' || 'Building'  ? item.id : undefined
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
            <DialogContent className='p-2 my-2 w-full'>
              <Calendar
                mode="single"
                selected={dateSearch}
                onSelect={setDateSearch}
                initialFocus
                numberOfMonths={2}
                disabled={(date) => date < new Date()}
                className="h-full w-full flex"
                classNames={{
                  months: "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
                  month: "space-y-4 w-full flex flex-col",
                  table: "w-full h-full border-collapse space-y-1",
                  head_row: "",
                  row: "mt-2",
                }}
              />
            </DialogContent>
          </Dialog>

          <div className="divider-vertical mx-4">
            <div className="h-5 w-[1px] bg-slate-300 rounded-md"></div>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <div className="min-w-24 py-2 px-3 hover:bg-[#e8ebef] hover:text-[#1e3a5f] rounded-lg transition-all duration-300">
                <span className="txt-base font-semibold">
                  {attendeesSearch || attendees} Attendees
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
                  value={attendeesSearch}
                  onChange={(e) => setAttendeesSearch(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="main-room-filter-button flex h-full items-center justify-center min-w-24 bg-[#e8ebef] rounded-md ml-auto text-[#1e3a5f]">
          <button
            className="text-base font-semibold"
            onClick={() =>
              handleSearch()
            }
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
            onClick={() => console.log('Open drawer')}
          >
            <span className="text-xs font-semibold">Change</span>
          </button>
        </div>
      </div>
    </div>
  );
}
