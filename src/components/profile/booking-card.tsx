"use client"

import React from 'react';
import { Building, Calendar, Clock, MapPin, MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BookingProps {
  booking: {
    id: string;
    bookingCode: string;
    meetingName: string;
    bookingDate: string;
    startTime: string;
    endTime: string;
    status: string;
    roomId: string;
  };
}

export default function BookingCard({ booking }: BookingProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatTime = (time: string) => {
    return new Date(time).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
              <Building className="text-teal-600" size={24} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{booking.meetingName}</h3>
              <p className="text-sm text-gray-500">Order ID: {booking.bookingCode}</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <MoreVertical className="text-gray-400" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Cancel Booking</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="mt-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <Calendar size={14} className="text-gray-400" />
            <span>{formatDate(booking.bookingDate)}</span>
            <span className="text-gray-400">•</span>
            <Clock size={14} className="text-gray-400" />
            <span>{formatTime(booking.startTime)} - {formatTime(booking.endTime)}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin size={14} className="text-gray-400" />
            <span>Room ID: {booking.roomId}</span>
          </div>
        </div>
      </div>
      
      <div className="border-t p-4 flex justify-between items-center bg-gray-50">
        <div>
          <span className="text-sm text-gray-500">Status</span>
          <div className={`mt-1 text-sm font-medium ${
            booking.status === 'Booked' ? 'text-green-600' : 'text-gray-900'
          }`}>
            {booking.status}
          </div>
        </div>
        {booking.status === 'Booked' && (
          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-700 transition-colors">
            View Details
          </button>
        )}
      </div>
    </div>
  );
}