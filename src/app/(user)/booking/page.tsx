// file: app/booking/page.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import BookingSummaryCard from "./_components/user-booking-summary-card";

export default function BookingPage() {
 const router = useRouter();
 const searchParams = useSearchParams();

 const roomId = searchParams.get("roomId");
 const floorId = searchParams.get("floorId");
 const bookingDate = searchParams.get("bookingDate");
 const startTime = searchParams.get("startTime");
 const endTime = searchParams.get("endTime");

 useEffect(() => {
   if (!roomId || !floorId || !bookingDate || !startTime || !endTime) {
     router.push("/error"); // Redirect if parameters are missing
   }
 }, [roomId, floorId, bookingDate, startTime, endTime, router]);

 return (
   <div className="w-full h-full bg-slate-50 py-6">
     <main className="container mx-auto max-w-screen-xl flex w-full gap-4 px-4">
       {/* Left Side */}
       <div className="flex flex-col gap-6 max-w-[854px] w-full">
         {/* Contact Details Section */}
         <section className="bg-white p-6 rounded-xl shadow-md">
           <h2 className="text-xl font-bold mb-2">Contact Details</h2>
           <p className="text-sm text-gray-600 mb-4">
             The contact details will be used to send the e-voucher and for refund/reschedule purposes.
           </p>

           <div className="grid gap-4">
             {/* Name Input */}
             <div>
               <Label htmlFor="name">Full Name</Label>
               <Input id="name" placeholder="Full Name According to ID" className="w-full" />
             </div>

             {/* Phone Number Input */}
             <div>
               <Label htmlFor="phone">Mobile Number</Label>
               <Input id="phone" placeholder="+62 813 2644 711" className="w-full" />
             </div>

             {/* Email Address Input */}
             <div>
               <Label htmlFor="email">Email Address</Label>
               <Input id="email" placeholder="email@example.com" className="w-full" />
             </div>
           </div>
         </section>

         {/* Booking Details Section */}
         <section className="bg-white p-6 rounded-xl shadow-md">
           <h2 className="text-xl font-bold mb-2">Booking Details</h2>
           <p className="text-sm text-gray-600 mb-4">
             Please review the booking details for your meeting room.
           </p>

           <div className="grid gap-2">
             <p>
               <strong>Room ID:</strong> {roomId}
             </p>
             <p>
               <strong>Floor ID:</strong> {floorId}
             </p>
             <p>
               <strong>Booking Date:</strong> {bookingDate}
             </p>
             <p>
               <strong>Start Time:</strong> {startTime}
             </p>
             <p>
               <strong>End Time:</strong> {endTime}
             </p>
           </div>
         </section>

         {/* Summary Card Section */}
         <Card className="bg-white rounded-xl shadow-md p-6">
           <CardHeader>
             <CardTitle className="text-xl font-semibold">Room Summary</CardTitle>
           </CardHeader>
           <CardContent>
             <p>
               <strong>Room:</strong> Example Room {roomId}
             </p>
             <p>
               <strong>Date:</strong> {bookingDate}
             </p>
             <p>
               <strong>Time:</strong> {startTime} - {endTime}
             </p>
             <p className="text-red-600 font-bold mt-4">Total (before taxes): IDR 1,831,500</p>
           </CardContent>
         </Card>

         {/* Confirmation Button */}
         <Button
           className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg mt-4"
           onClick={() => alert("Booking confirmed!")}
         >
           Confirm Booking
         </Button>
       </div>
       {/* Right Side */}
       <div className="flex flex-col max-w-sm w-full ml-6">
          <BookingSummaryCard
            roomId={roomId}
            floorId={floorId}
            bookingDate={bookingDate}
            startTime={startTime}
            endTime={endTime}
          />
        </div>
     </main>
   </div>
 );
}