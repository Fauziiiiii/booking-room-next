"use client";

import { CheckCircle } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BookingSuccessData {
  meetingName: string;
  description: string;
  userName: string;
  userEmail: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  roomId: string;
  bookingId: string;
}

export default function BookingSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [bookingData, setBookingData] = useState<BookingSuccessData | null>(null);

  useEffect(() => {
    const data = searchParams.get('data');
    if (data) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(data));
        setBookingData(decodedData);
      } catch (error) {
        console.error('Error parsing booking data:', error);
        router.push('/home');
      }
    }
  }, [searchParams, router]);

  if (!bookingData) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(bookingData.bookingDate).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
      <CheckCircle className="text-green-500 w-20 h-20 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
      <p className="text-gray-600 mb-6">Your meeting room has been successfully booked.</p>

      <div className="bg-gray-100 rounded-lg p-6 w-full max-w-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Meeting Name:</strong> {bookingData.meetingName}</li>
          <li><strong>Description:</strong> {bookingData.description}</li>
          <li><strong>Date:</strong> {formattedDate}</li>
          <li><strong>Time:</strong> {bookingData.startTime} - {bookingData.endTime}</li>
          <li><strong>Booked by:</strong> {bookingData.userName}</li>
          <li><strong>Email:</strong> {bookingData.userEmail}</li>
        </ul>
      </div>

      <div className="flex gap-4 mt-6">
        <button 
          onClick={() => router.push(`/booking/${bookingData.bookingId}`)} 
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          View Booking Details
        </button>
        <button 
          onClick={() => router.push('/home')} 
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}