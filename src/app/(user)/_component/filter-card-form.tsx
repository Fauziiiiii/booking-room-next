"use client"

import React, { CSSProperties, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { MapPin, Calendar as CalendarIcon, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { InputWithIcon } from '@/components/ui/input-with-icon';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { getGlobalSearch } from '@/lib/search/actions/get-global-search';
import { useDebounce } from '@/hooks/use-debounce';

const CarouselSection = ({ title, items, onSelectItem }: any) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const customStyles: CSSProperties & { [key: string]: any } = {
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
        style={customStyles}
      >
        {items.map((item: string, index: React.Key) => (
          <div
            key={index}
            onClick={() => onSelectItem(item)}
            className="min-w-[200px] flex-shrink-0 bg-gray-100 rounded-md shadow-sm p-3 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <span className="text-sm font-medium text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FilterCardForm = () => {
  const [location, setLocation] = useState("South Jakarta");
  const [attendees, setAttendees] = useState("1");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [date, setDate] = React.useState<Date>();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const formattedDate = date ? date.toLocaleDateString() : 'Select a date';

  const popularSearches = [
    "Coworking Space Central",
    "Luxury Meeting Room",
    "East Jakarta Hall",
    "Jakarta Selatan Office",
    "Premium Office Space",
    "Conference Room CBD",
    "Meeting Room Tower",
    "Creative Space Hub",
  ];

  const recentlySearched = [
    "Startup HQ South",
    "Creative Hub North",
    "Training Room Central",
    "Business Center East",
    "Innovation Lab West",
    "Tech Hub Central",
    "Workshop Space",
  ];

  const { data, isLoading, isError } = useQuery({
    queryKey: ['global-search', debouncedSearchTerm],
    queryFn: () => getGlobalSearch(debouncedSearchTerm),
    enabled: debouncedSearchTerm.length > 2,
    staleTime: 5000,
    refetchOnWindowFocus: false
  });

  const handleSelectItemSearch = (selectedLocation: string) => {
    setLocation(selectedLocation);
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Location Search Button/Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full h-12 justify-between font-normal text-left bg-gray-50 hover:bg-gray-50">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="font-semibold text-[#303135]">{location}</span>
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
            {/* Search Input */}
            <div className="sticky top-0 px-4 pt-2 pb-4 bg-white">
              <InputWithIcon
                icon={FiSearch}
                placeholder="Search by room name, building, location, etc."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />

              {/* Search Results */}
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
                  {data.map((item: any) => {
                    const Icon = FiSearch;
                    return (
                      <div 
                        key={item.id} 
                        onClick={() => handleSelectItemSearch(item.name)}
                        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <Icon className="mr-3 text-gray-500" size={20} />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500">
                            {item.type} in {item.city}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="px-4">
                {/* History Search Section with Carousel */}
                <CarouselSection
                    title="Recently Searched"
                    items={recentlySearched}
                    onSelectItem={handleSelectItemSearch}
                />

                {/* Popular Search Section with Carousel */}
                <CarouselSection
                    title="Popular Search"
                    items={popularSearches}
                    onSelectItem={handleSelectItemSearch}
                />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Rest of the code remains the same as the original implementation */}
      <div className="flex gap-2">
        {/* Date Range Button/Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex-1 h-12 justify-between font-normal text-left bg-gray-50 hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-gray-500" />
                <span className="font-semibold text-[#303135]">{formattedDate}</span>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className='w-full'>
            <DialogHeader>
              <DialogTitle>Choose Dates</DialogTitle>
            </DialogHeader>
            <Calendar
                className="h-full w-full flex"
                classNames={{
                    months: "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
                    month: "space-y-4 w-full flex flex-col",
                    table: "w-full h-full border-collapse space-y-1",
                    head_row: "",
                    row: "mt-2",
                }} 
                mode="single" 
                selected={date} 
                onSelect={setDate} 
                initialFocus 
                disabled={(date) => date < new Date()}
            />
          </DialogContent>
        </Dialog>

        {/* Attendees Button/Dialog */}
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
              {/* Add your attendees selection content here */}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search Button */}
      <Button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white">
        Let's Search
      </Button>
    </div>
  );
};

export default FilterCardForm;