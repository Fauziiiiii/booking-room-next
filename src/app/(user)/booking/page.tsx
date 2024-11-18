/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import BookingSummaryCard from "./_components/user-booking-summary-card";
import { InputCustom } from "@/components/ui/input-custom";
import { AutosizeTextarea } from "@/components/ui/auto-size-text-area";
import { CardsChat } from "./_components/user-booking-add-user";
import { Clipboard } from "lucide-react";
import { toast } from "sonner";

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

  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText("https://your-app.com/invite-link")
        .then(() => toast.success("Link copied!"))
        .catch((err) => toast.error("Failed to copy link"));
    } else {
      toast.error("Copy not supported on this browser");
    }
  };

  const generateInviteLink = () => {
    const baseUrl = "https://meet-hub.id/invite";
    const projectName = "booking";
    const bookingId = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // Replace with dynamic data
    const roomSlug = "awesome-meeting-room"; // Replace with dynamic data

    return `${baseUrl}/${projectName}/${bookingId}/${roomSlug}`;
  };

  return (
    <div className="w-full h-full bg-slate-50 py-6">
      <main className="container mx-auto max-w-screen-xl px-4 flex flex-col md:flex-row gap-6">
        {/* Summary Card for md and below */}
        <div className="md:hidden">
          <BookingSummaryCard
            roomId={roomId}
            floorId={floorId}
            bookingDate={bookingDate}
            startTime={startTime}
            endTime={endTime}
          />
        </div>

        {/* Main Form Section */}
        <div className="flex flex-col gap-6 md:max-w-[854px] w-full">
          {/* Contact Details Section */}
          <section>
            <div>
              <h2 className="text-xl font-bold mb-2">Contact Details</h2>
              <p className="text-sm text-gray-600 mb-4">
                The contact details will be used to send notification for reminder meeting.
              </p>
            </div>
            <div className="grid gap-4 bg-white rounded-xl shadow-md p-6">
              <div className="space-y-1">
                <Label htmlFor="name" className="font-semibold">
                  Full Name
                </Label>
                <InputCustom
                  id="name"
                  placeholder="Full Name According to ID"
                  className="w-full"
                  defaultValue={"Muhammad Fauzi Fadillah"}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone" className="font-semibold">
                  Mobile Number
                </Label>
                <InputCustom
                  id="phone"
                  placeholder="+62 813 2644 711"
                  className="w-full"
                  defaultValue={"+62 813 2644 711"}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email" className="font-semibold">
                  Email Address
                </Label>
                <InputCustom
                  id="email"
                  placeholder="email@example.com"
                  className="w-full"
                  readOnly={true}
                  defaultValue={"fauziii7798@gmail.com"}
                />
              </div>
            </div>
          </section>

          {/* Booking Details Section */}
          <section>
            <div>
              <h2 className="text-xl font-bold mb-2">Booking Details</h2>
              <p className="text-sm text-gray-600 mb-4">
                Please review the booking details for your meeting room.
              </p>
            </div>
            <div className="grid gap-4 bg-white rounded-xl shadow-md p-6">
              <div className="space-y-1">
                <Label htmlFor="name" className="font-semibold">
                  Meeting Name
                </Label>
                <InputCustom id="name" placeholder="Name your meeting section" className="w-full" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone" className="font-semibold">
                  Description
                </Label>
                <AutosizeTextarea placeholder="Describe your meeting section" maxHeight={200} />
              </div>
              <div className="space-y-1 flex flex-col gap-y-2">
                <Label htmlFor="email" className="font-semibold">
                  Add participant
                </Label>
                <CardsChat />
              </div>
              <div className="space-y-1 flex flex-col gap-y-2">
                <Label htmlFor="inviteLink" className="font-semibold">
                  Or share this link to invite your participant
                </Label>
                <div className="flex items-center gap-2">
                  <InputCustom
                    id="inviteLink"
                    type="text"
                    readOnly
                    defaultValue={generateInviteLink()}
                    className="border rounded px-2 py-1 w-full"
                  />
                  <button
                    onClick={() => copyToClipboard()}
                    className="flex items-center p-2 rounded hover:bg-muted"
                  >
                    <Clipboard size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <Button
            className="hidden md:flex w-full bg-blue-600 text-white font-semibold py-3 rounded-full"
            onClick={() => toast.success("Booking confirmed!")}
          >
            Confirm Booking
          </Button>
        </div>

        {/* Summary Card for larger screens */}
        <div className="hidden md:flex flex-col gap-6 max-w-sm w-full">
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
