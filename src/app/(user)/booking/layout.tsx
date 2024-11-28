"use client"

import * as React from "react";
import UserBookingHeader from "./_components/user-booking-header";
import { toast } from "sonner";

export default function UserBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header */}
      <UserBookingHeader />

      {/* Main Content */}
      <div className="flex-grow">{children}</div>

      {/* Sticky Confirm Button (Mobile Only) */}
      <div className="sticky bottom-0 w-full md:hidden bg-white shadow-md py-3 px-4">
        <button
          className="w-full bg-teal-600 text-white font-semibold py-3 rounded-full"
          onClick={() => toast.success("Booking confirmed!")}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
