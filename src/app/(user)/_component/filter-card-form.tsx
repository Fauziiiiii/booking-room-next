"use client"

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { MapPin, Calendar as CalendarIcon, Users } from "lucide-react";
import { InputWithIcon } from '@/components/ui/input-with-icon';
import { FiSearch } from 'react-icons/fi';
import { useQuery } from '@tanstack/react-query';
import { getGlobalSearch } from '@/lib/search/actions/get-global-search';
import { useDebounce } from '@/hooks/use-debounce';
import { SearchResult } from '@/types/search';


const FilterCardForm = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("South Jakarta");
  const [searchCategory, setSearchCategory] = useState("City");
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [attendees, setAttendees] = useState("1");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [date, setDate] = React.useState<Date>();
  const [searchTerm, setSearchTerm] = useState('South Jakarta');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const formattedDate = date 
    ? new Intl.DateTimeFormat("id-ID", { 
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date)
    : "";

  // Format untuk query parameter
  const formatDateForQuery = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['global-search', debouncedSearchTerm],
    queryFn: () => getGlobalSearch(debouncedSearchTerm),
    enabled: debouncedSearchTerm.length > 2,
    staleTime: 5000,
    refetchOnWindowFocus: false
  });

  const handleSelectItemSearch = (selectedSearch: string, categoryType: string, roomId?: string) => {
    setSearchValue(selectedSearch);
    setSearchCategory(categoryType.toLowerCase());
    setIsDialogOpen(false);

    if (categoryType.toLowerCase() && roomId) {
      setSelectedRoomId(roomId);
    } else {
      setSelectedRoomId(null);
    }
  };
  
  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (attendees) {
      queryParams.append('attendees', attendees);
    }

    if (date) {
      queryParams.append('date', formatDateForQuery(date));
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
    <div className="flex flex-col gap-3">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full h-12 justify-between font-normal text-left bg-gray-50 hover:bg-gray-50">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="font-semibold text-[#303135]">{searchValue}</span>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] overflow-hidden flex flex-col">
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

              {isLoading && (
                <div className="mt-2 text-center text-gray-500">Searching...</div>
              )}

              {isError && (
                <div className="mt-2 text-center text-red-500">
                  An error occurred during search
                </div>
              )}
              {data && data.length > 0 && (
                <div className="mt-2 border rounded-md shadow-sm max-h-60 overflow-y-auto">
                  {data.map((item: SearchResult) => (
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

      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex-1 h-12 justify-between font-normal text-left bg-gray-50 hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-gray-500" />
                <span className="font-semibold text-[#303135]">
                  {formattedDate || "Select Date"}
                </span>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className='p-2 w-full'>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              initialFocus
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

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="h-12 px-4 font-normal bg-gray-50 hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gray-500" />
                <span className="font-semibold text-[#303135]">{attendees}</span>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Number of Attendees</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <input
                type="number"
                min="1"
                value={attendees}
                onChange={(e) => setAttendees(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Button className="h-12 w-full" onClick={handleSearch}>
        Let&apos;s Search
      </Button>
    </div>
  );
};

export default FilterCardForm;
