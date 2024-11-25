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
import { Clipboard, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBooking } from "@/lib/booking/hooks/useCreateBooking";
import { Booking } from "@/types/booking";
import { CreateBookingDto } from "@/lib/booking/dto/create-booking-dto";
import { convertToUtcForID, convertToUtcFormat, convertToUTCForTimeSpan } from "@/lib/utils/dateUtils";
import { format } from "path";

const bookingSchema = z.object({
  meetingName: z.string().min(5, "Meeting Name must be at least 5 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  userName: z.string().min(1, "Full name is required"),
  userEmail: z.string().email("Invalid email address"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingPage() {
  const { mutate, isPending } = useCreateBooking()
  const router = useRouter();
  const searchParams = useSearchParams();

  const userId = "f3e54abe-0a7f-401c-9812-a17fc01b15a6";
  const roomId = searchParams.get("roomId");
  const floorId = searchParams.get("floorId");
  const bookingDate = searchParams.get("bookingDate");
  const startTime = searchParams.get("startTime");
  const endTime = searchParams.get("endTime")

  const formattedBookingDate = convertToUtcForID(bookingDate || "");
  const formattedStartTime = convertToUTCForTimeSpan(bookingDate || "", startTime || "")
  const formattedEndTime = convertToUTCForTimeSpan(bookingDate || "", endTime || "")

    const { register, handleSubmit, reset, formState: { errors }, control } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      meetingName: "",
      description: "",
      userName: "Muhammad Fauzi Fadillah",
      userEmail: "fauziii7798@gmail.com",
    }
  });

  // console.log(formattedBookingDate);
  // console.log(formattedStartTime);
  // console.log(formattedEndTime);

  // const onSubmit = async (values: BookingFormData) => {
  //   console.log(values)
  //   try{
  //     const bookingData: CreateBookingDto = {
  //       ...values,
  //       userId,
  //       roomId: roomId || "",
  //       bookingDate: formattedBookingDate,
  //       startTime: formattedStartTime,
  //       endTime: formattedEndTime,
  //     };
      
  //     console.log("itel cok submit")

  //     mutate(bookingData, {
  //       onSuccess: () => {
  //         reset();
  //         return toast.success("Booking success for your order");
  //       },
  //       onError: (error) => {
  //           console.error("error create booking cik", error)
  //           return toast.error("Some error while creating booking")
  //       }
  //     });
  //   } catch(err) {
  //     console.log("sudah error banget", err)
  //     return toast.error("Error geden cikk")
  //   }
  // }

  const onSubmit = async (values: BookingFormData) => {
    try {
      const bookingData: CreateBookingDto = {
        ...values,
        userId,
        roomId: roomId || "",
        bookingDate: formattedBookingDate,
        startTime: formattedStartTime,
        endTime: formattedEndTime,
      };

      mutate(bookingData, {
        onSuccess: (response) => {
          const successData = encodeURIComponent(JSON.stringify({
            meetingName: values.meetingName,
            description: values.description,
            userName: values.userName,
            userEmail: values.userEmail,
            bookingDate: bookingDate,
            startTime: startTime,
            endTime: endTime,
            roomId: roomId,
            bookingId: response.id
          }));
          
          router.push(`/booking/success?data=${successData}`);
        },
        onError: (error) => {
          console.error("error create booking", error);
          return toast.error("Some error while creating booking");
        }
      });
    } catch(err) {
      console.log("Error occurred", err);
      return toast.error("An error occurred");
    }
  };
  
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("userName")}
                  />
                  {errors.userName && <span className="text-red-300 text-sm">{errors.userName?.message}</span>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="font-semibold">
                    Email Address
                  </Label>
                  <InputCustom
                    id="email"
                    placeholder="email@example.com"
                    className="w-full bg-slate-200"
                    readOnly={true}
                    defaultValue={"fauziii7798@gmail.com"}
                    {...register("userEmail")}
                  />
                  {errors.userEmail && <span className="text-red-300 text-sm">{errors.userEmail?.message}</span>}
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
                  <InputCustom id="name" placeholder="Name your meeting section" className="w-full" {...register("meetingName")} />
                  {errors.meetingName && <span className="text-red-300 text-sm">{errors.meetingName?.message}</span>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone" className="font-semibold">
                    Description
                  </Label>
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <AutosizeTextarea
                        {...field}
                        maxHeight={200}
                        placeholder="Describe your meeting section"
                        className="w-full"
                      />
                    )}
                  />
                  {/* <AutosizeTextarea placeholder="Describe your meeting section" maxHeight={200} {...register("description")} /> */}
                  {errors.description && <span className="text-red-300 text-sm">{errors.description?.message}</span>}
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
            <button
              type="submit"
              className={`hidden md:flex w-full text-white font-semibold py-3 rounded-full text-center justify-center ${
                isPending ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600"
              }`}
              disabled={isPending}
            >
              {isPending ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  Please Wait
                </div>
              ) : (
                "Confirm Booking"
              )}
            </button>
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
      </form>
    </div>
  );
}
