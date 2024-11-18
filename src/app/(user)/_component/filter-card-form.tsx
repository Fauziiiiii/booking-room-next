

import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { MapPin, Calendar as CalendarIcon, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from 'react';
import { InputWithIcon } from '@/components/ui/input-with-icon';
import { FiSearch } from 'react-icons/fi';

const CarouselSection = ({ title, items }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
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
        style={{
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
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
  const [dateRange, setDateRange] = useState("21 Nov - 22 Nov");
  const [attendees, setAttendees] = useState("1");

  // Sample Data with more items to demonstrate carousel
  const popularSearches = [
    "Coworking Space Central",
    "Luxury Meeting Room",
    "East Jakarta Hall",
    "Jakarta Selatan Office",
    "Premium Office Space",
    "Conference Room CBD",
    "Meeting Room Tower",
    "Creative Space Hub"
  ];

  const historySearches = [
    "Startup HQ South",
    "Creative Hub North",
    "Training Room Central",
    "Business Center East",
    "Innovation Lab West",
    "Tech Hub Central",
    "Workshop Space"
  ];

  const handleSelectItemSearch = () => {
    
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Location Search Button/Dialog */}
      <Dialog>
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
            <DialogTitle><h2 className='text-2xl text-[#303135]'>Going Anywhere?</h2></DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto">
            {/* Search Input */}
            <div className="sticky top-0 px-4 pt-2 pb-4 bg-white">
              <InputWithIcon
                icon={FiSearch}
                placeholder="Search by room name, building, location, etc."
                className="w-full"
              />
            </div>

            <div className="px-4">
              {/* History Search Section with Carousel */}
              <CarouselSection title="History" items={historySearches} />

              {/* Popular Search Section with Carousel */}
              <CarouselSection title="Popular Searches" items={popularSearches} />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Date and Attendees Container */}
      <div className="flex gap-2">
        {/* Date Range Button/Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex-1 h-12 justify-between font-normal text-left bg-gray-50 hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-gray-500" />
                <span className="font-semibold text-[#303135]">{dateRange}</span>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Choose Dates</DialogTitle>
            </DialogHeader>
            <Calendar mode="range" className="rounded-md border" />
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