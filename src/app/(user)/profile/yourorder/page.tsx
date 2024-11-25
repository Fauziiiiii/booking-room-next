"use client"

import React from 'react';
import Link from 'next/link';
import { Ticket, HelpCircle } from 'lucide-react';
import ProfileNavigation from '@/components/profile/profile-navigation';
import BookingCard from '@/components/profile/booking-card';
import Image from 'next/image';

export default function YourOrdersPage() {
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
    },
    {
      "id": "95ba2bb7-6be1-4452-bf6f-b245d38dc9ea",
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
    <>
      <ProfileNavigation />
      <div className="flex-1">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Your Orders</h1>
            <Link
              href="/profile/orders/history"
              className="text-teal-600 hover:text-teal-700 flex items-center gap-2"
            >
              <Ticket size={16} />
              Order History
            </Link>
          </div>

          {/* Bookings List */}
          {bookings.length > 0 ? (
            <div>
              {bookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <Image
                src="/api/placeholder/240/240"
                alt="No active orders"
                className="mx-auto mb-4 w-60 h-60"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No active orders</h3>
              <p className="text-gray-600 mb-6">
                You can see all your meeting room bookings here.
                Let&apos;s book a room for your next meeting!
              </p>
              <Link
                href="/booking"
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Book a Room
              </Link>
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <HelpCircle size={24} className="text-teal-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Need help with your order?</h3>
              <p className="text-gray-600 text-sm">Visit the Help Center to find the solutions for your problems.</p>
            </div>
          </div>
          <Link
            href="/help-center"
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap text-sm"
          >
            Help Center
          </Link>
        </div>
      </div>
    </>
  );
}