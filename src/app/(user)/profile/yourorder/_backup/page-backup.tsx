"use client"

import React from 'react';
import { User, Star, Ticket, Users, Crown, HelpCircle, Settings, Calendar, Clock, MapPin, Building } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sidebarItems = [
  { icon: User, label: 'Account', href: '/profile/account' },
  { icon: Ticket, label: 'Your Orders', href: '/profile/yourorder' },
  { icon: Star, label: 'Your Reviews', href: '/profile/reviews' },
  { icon: Users, label: 'Save Meeting Room Data', href: '/profile/meeting-rooms' },
  { icon: HelpCircle, label: 'Help Center', href: '/profile/help' },
  { icon: Settings, label: 'Settings', href: '/profile/settings' },
];

// Helper function to format date
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Helper function to format time
const formatTime = (timeString) => {
  return new Date(timeString).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

const BookingCard = ({ booking }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'booked':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{booking.meetingName}</h3>
              <Badge className={getStatusColor(booking.status)}>
                {booking.status}
              </Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} className="text-teal-600" />
                <span>{formatDate(booking.bookingDate)}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={16} className="text-teal-600" />
                <span>{formatTime(booking.startTime)} - {formatTime(booking.endTime)}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} className="text-teal-600" />
                <span>Room: {booking.roomId}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Building size={16} className="text-teal-600" />
                <span>Booking Code: {booking.bookingCode}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:w-48">
            <Link
              href={`/profile/booking/${booking.id}`}
              className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg text-center hover:bg-teal-700 transition-colors"
            >
              View Details
            </Link>
            {booking.status === 'Booked' && (
              <button
                className="w-full border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
              >
                Cancel Booking
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function YourOrdersPage() {
  const pathname = usePathname();
  
  // Example bookings data - replace with your API call
  const bookings = [
    {
      "id": "5c5c8905-514f-464a-b4ac-f5b57ec59d1d",
      "bookingCode": "BOOK0000002",
      "meetingName": "UMS UI/UX Team",
      "bookingDate": "2024-11-24T00:00:00Z",
      "startTime": "2024-11-24T02:30:00Z",
      "endTime": "2024-11-24T04:00:00Z",
      "description": "apalah",
      "status": "Booked",
      "userId": "f3e54abe-0a7f-401c-9812-a17fc01b15a6",
      "userName": "Muhammad Fauzi Fadillah",
      "userEmail": "fauziii7798@gmail.com",
      "roomId": "230ac29f-683c-48f9-9fc5-7d1da3b28e5c",
    },
    {
      "id": "95ba2bb7-6be1-4452-bf6f-b245d38dc9ef",
      "bookingCode": "BOOK0000003",
      "meetingName": "tess error ",
      "bookingDate": "2024-12-24T00:00:00Z",
      "startTime": "2024-12-24T05:00:00Z",
      "endTime": "2024-12-24T07:00:00Z",
      "description": "apakah",
      "status": "Booked",
      "userId": "f3e54abe-0a7f-401c-9812-a17fc01b15a6",
      "userName": "Muhammad Fauzi Fadillah",
      "userEmail": "fauziii7798@gmail.com",
      "roomId": "230ac29f-683c-48f9-9fc5-7d1da3b28e5c",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-80">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-semibold text-teal-600">MF</span>
                </div>
                <div>
                  <h2 className="font-semibold text-lg text-gray-800">Muhammad Fauzi Fadillah</h2>
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm inline-flex items-center gap-1 mt-1">
                    <Crown size={14} />
                    <span>Gold Tier</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="bg-white rounded-lg shadow-sm">
              {sidebarItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-6 py-3 hover:bg-teal-50 transition-colors ${
                      isActive ? 'bg-teal-100 text-teal-700' : 'text-gray-700'
                    }`}
                  >
                    <IconComponent size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">Your Orders</h1>
                <div className="flex gap-4">
                  <Link
                    href="/profile/orders/history"
                    className="text-teal-600 hover:text-teal-700 flex items-center gap-2"
                  >
                    <Ticket size={16} />
                    Order History
                  </Link>
                </div>
              </div>

              {/* Bookings List */}
              {bookings.length > 0 ? (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                </div>
              ) : (
                /* Empty State */
                <div className="text-center py-12">
                  <img
                    src="/api/placeholder/300/200"
                    alt="No active orders"
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No active orders</h3>
                  <p className="text-gray-600 mb-6">
                    You can see all your meeting room bookings here.
                    Let's book a room for your next meeting!
                  </p>
                  <Link
                    href="/booking"
                    className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
                  >
                    Book a Room
                  </Link>
                </div>
              )}

              {/* Help Section */}
              <div className="mt-8 bg-teal-50 rounded-lg p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <HelpCircle size={24} className="text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Need help with your order?</h3>
                    <p className="text-gray-600">Visit the Help Center to find the solutions for your problems.</p>
                  </div>
                </div>
                <Link
                  href="/help-center"
                  className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors whitespace-nowrap"
                >
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}