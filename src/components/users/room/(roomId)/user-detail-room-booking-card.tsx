/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client"

// import { CalendarDays, ChevronRight, Clock3, LucideCalendarDays, MapPin, SquareUserRound } from 'lucide-react'
// import React, { useState } from 'react'
// import RoomBookingDialog from './user-detail-room-dialog-form'
// import { useSearchParams } from 'next/navigation';
// import { formatDateToEN, formatDateToID, formatUtcDateSimple } from '@/lib/utils/dateUtils';
// import { BookedList } from '@/types/roomQuery';
// import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
// import { DatePickerForm } from './date-time-picker-24h';

// interface RoomBookingCardProps {
//     title: string | null;
//     startTime: string | null;
//     endTime: string | null;
//     address: string | null;
//     capacity: number | null;
//     size: string | null;
//     bookedList: BookedList[] | []
//   }

// export default function RoomBookingCard({
//     title,
//     startTime,
//     endTime,
//     address,
//     capacity,
//     size,
//     bookedList
// }: RoomBookingCardProps) {
//     const [open, setOpen] = useState(false)
//     const searchParams = useSearchParams()
//     const bookingDateParam = searchParams.get('date');
//     const formatedBookingDateParam = formatDateToEN(bookingDateParam ?? "");

//     const handleOpen = () => setOpen(true)
//     const handleClose = () => setOpen(false)

//     const [bookingData, setBookingData] = useState({
//         dateBooking: '',
//         startTime: '',
//         endTime: ''
//     });

//     const handleBookingDataChange = (updatedData: { dateBooking?: string; startTime?: string; endTime?: string }) => {
//         setBookingData((prevData) => ({ ...prevData, ...updatedData }));
//       };

//     return (
//         <>
//             <div className="container-process-booking md:px-4 space-y-6 mb-4">
//                 <div className="md:max-w-screen-xl md:px-4 mx-auto">
//                 {/* Card Rekomendasi */}
//                 <div className="border border-gray-200 bg-[#f1f2f3] md:rounded-md overflow-hidden flex flex-col md:flex-row py-4">
                    
//                     {/* Left Section*/}
//                     <div className="px-4 md:px-6 flex-1 mb-4 md:mb-0 md:max-w-md">
//                     <h3 className="text-lg font-semibold mb-4 mx-2 md:mx-0">Already booked slots for selected date</h3>
                    
//                     <div className="flex flex-col divide-y divide-gray-300">
//                         {/* Booking Row - Responsive */}
//                         {bookedList.map((bookList) => (
//                             <div className="py-2 mx-2" key={bookList.id}>
//                                 <div className="flex flex-wrap gap-3 items-center justify-center">
//                                     <div className="flex gap-2 items-center">
//                                     <SquareUserRound size={18} color='#1e3a5f'/>
//                                     <span className='text-xs text-[#1e3a5f] font-medium whitespace-nowrap truncate' style={{ maxWidth: '100px' }}>{bookList.bookingCode}</span>
//                                     </div>
//                                     <div className="flex gap-2 items-center">
//                                     <Clock3 size={18} color='#1e3a5f'/>
//                                     <span className='text-xs text-[#1e3a5f] font-medium whitespace-nowrap truncate' style={{ maxWidth: '150px' }}>
//                                         {/* 06:30 - 08:00 */}
//                                         {new Date(bookList.startTime ?? "").toLocaleTimeString(
//                                             'id-ID',
//                                             { hour: '2-digit', minute: '2-digit' }
//                                         )} - 
//                                         {new Date(bookList.endTime ?? "").toLocaleTimeString(
//                                             'id-ID',
//                                             { hour: '2-digit', minute: '2-digit' }
//                                         )}
//                                     </span>
//                                     </div>
//                                     <div className="flex gap-2 items-center">
//                                     <LucideCalendarDays size={18} color='#1e3a5f'/>
//                                     <span className='text-xs text-[#1e3a5f] font-medium whitespace-nowrap truncate' style={{ maxWidth: '120px' }}>{formatUtcDateSimple(bookList.bookingDate, 'en-US')}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     </div>
                    
//                     {/* Right Side - Detail Room */}
//                     <div className="p-4 md:p-6 flex-1 bg-white relative mx-4 md:mx-0 md:mr-4 rounded-lg">
//                         <div className="border border-gray-200 rounded-lg p-4 mb-4">
//                             <div className="space-y-3">
//                             <div className="flex justify-between items-start">
//                                 <h4 className="text-sm md:text-lg font-semibold pr-2 flex-1">{title}</h4>
//                                 <div className="flex justify-between cursor-pointer hover:underline" onClick={handleOpen}>
//                                     <p className='text-sm text-[#666c77]'>Change</p>
//                                     <ChevronRight size={20} color='#666c77' className="flex-shrink-0 hover:underline"/>
//                                 </div>
//                             </div>
                            
//                             {/* <p className="text-green-600 text-xs">100% Refund & Reschedule until 16 Dec 2024</p> */}
                            
//                             <div className="flex flex-wrap gap-x-4 gap-y-2 items-center text-gray-500">
//                                 <div className="flex gap-1 items-center">
//                                 {/* Booking Date */}
//                                 <CalendarDays size={14}/>
//                                     <span className='text-xs whitespace-nowrap'>{formatedBookingDateParam}</span>
//                                 </div>
//                                 <div className="flex gap-1 items-center">
//                                 {/* Booking start time and end time */}
//                                 <Clock3 size={14}/>
//                                 <span className='text-xs whitespace-nowrap'>
//                                     {bookingData.startTime || 'Start'} - {bookingData.endTime || 'End'}
//                                 </span>
//                                 </div>
//                             </div>

//                             <div className="flex gap-1 text-gray-500">
//                                 <MapPin size={15} className="flex-shrink-0 mt-1"/>
//                                 <span className='text-xs line-clamp-2 break-words'>
//                                     {address}
//                                 </span>
//                             </div>
//                             </div>

//                             <div className="text-gray-600 text-xs border-t border-gray-200 pt-2 mt-3">
//                             {size}m², {capacity} attendees
//                             </div>
//                         </div>

//                         <button 
//                             className="w-full bg-[#1e3a5f] text-white py-2 text-sm rounded-md hover:bg-blue-700 font-semibold transition-colors"
//                             onClick={() => window.location.href='/booking?roomId=230ac29f-683c-48f9-9fc5-7d1da3b28e5c&floorId=a18018a2-3081-40c8-9854-8ef52519fc9b&bookingDate=2024-11-15&startTime=07:00&endTime=08:30'}
//                         >
//                             Book 1 Room
//                         </button>
//                     </div>
//                 </div>
//                 </div>
//             </div>

//             {/* <RoomBookingDialog open={open} onClose={handleClose} /> */}
//             <Dialog open={open} onClose={handleClose} className="relative z-10">
//                 <DialogBackdrop
//                     transition
//                     className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
//                 />
//                 <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//                     <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//                         <DialogPanel
//                             transition
//                             className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full sm:max-w-xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
//                         >
//                             <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                                 <div className="sm:flex sm:items-start">
//                                     <div className="mt-2 sm:w-full">
//                                     <DatePickerForm onBookingChange={handleBookingDataChange} initialData={bookingData}/>
//                                         {/* <DatetimePickerV1/>  */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </DialogPanel>
//                     </div>
//                 </div>
//             </Dialog>
//         </>
//     )
// }




"use client"

import React, { useState } from 'react'
import { format, parse, addMinutes, isWithinInterval } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useSearchParams } from 'next/navigation'
import { CalendarDays, ChevronRight, Clock3, LucideCalendarDays, MapPin, SquareUserRound } from 'lucide-react'


// UI Components
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { toast } from "sonner"
import { convertToUtcForID, formatDateForQuery } from '@/lib/utils/dateUtils'
import { useRoomAvailability } from '@/lib/room/hooks/useGetByIdRoom'
interface RoomBookingProps {
  roomId: string | null
}

// Form Schema
const bookingFormSchema = z.object({
  date: z.date({ required_error: "Date is required" }),
  startTime: z.string({ required_error: "Start time is required" }),
  endTime: z.string({ required_error: "End time is required" }),
}).refine((data) => {
  if (!data.startTime || !data.endTime) return true
  return data.startTime < data.endTime
}, {
  message: "End time must be after start time",
  path: ["endTime"],
})

const generateTimeSlots = (start: Date, end: Date, intervalMinutes: number = 30) => {
  const slots: string[] = [];
  let currentTime = start;

  while (currentTime < end) {
    slots.push(format(currentTime, 'HH:mm'));
    currentTime = addMinutes(currentTime, intervalMinutes);
  }
  
  const lastSlot = format(end, 'HH:mm');
  if (slots[slots.length - 1] !== lastSlot) {
    slots.push(lastSlot);
  }

  return slots;
};

export default function RoomBookingCard({ roomId }: RoomBookingProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const searchParams = useSearchParams()
  const bookingDate = searchParams.get('date');

  const dateNow = formatDateForQuery(new Date());
  const formattedDateQuery = bookingDate || dateNow;

  const formattedDateForApi = convertToUtcForID(formattedDateQuery);

  const {
    availableRoom,
    isLoading,
    checkAvailability
  } = useRoomAvailability(roomId ?? "", formattedDateForApi);
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    bookingDate ? new Date(bookingDate) : new Date()
  )

  const { timeSlots, operatingStart, operatingEnd } = React.useMemo(() => {
    if (!availableRoom?.operatingHours) {
      return { timeSlots: [], operatingStart: null, operatingEnd: null };
    }

    const startTime = new Date(availableRoom.operatingHours.startTime);
    const endTime = new Date(availableRoom.operatingHours.endTime);

    const operatingStart = format(startTime, 'HH:mm');
    const operatingEnd = format(endTime, 'HH:mm');

    const slots = generateTimeSlots(
      parse(operatingStart, 'HH:mm', new Date()),
      parse(operatingEnd, 'HH:mm', new Date())
    );

    return { timeSlots: slots, operatingStart, operatingEnd };
  }, [availableRoom?.operatingHours]);

  const getAvailableTimeSlots = (selectedDate: Date, forStartTime: boolean = true) => {
    if (!timeSlots.length) return [];
    
    const selectedDateStr = format(selectedDate, 'yyyy-MM-dd');
    
    return timeSlots.filter(timeSlot => {
      if (forStartTime) {
        return !availableRoom?.bookedList.some(booking => {
          const bookingDate = format(new Date(booking.bookingDate), 'yyyy-MM-dd');
          if (bookingDate !== selectedDateStr) return false;

          const slotTime = parse(timeSlot, 'HH:mm', new Date());
          const bookingStart = new Date(booking.startTime);
          const bookingEnd = new Date(booking.endTime);

          return isWithinInterval(slotTime, { start: bookingStart, end: bookingEnd });
        });
      } else {
        const startTimeDate = parse(form.getValues('startTime'), 'HH:mm', new Date());
        const currentSlotDate = parse(timeSlot, 'HH:mm', new Date());
        
        if (currentSlotDate <= startTimeDate) return false;

        return !availableRoom?.bookedList.some(booking => {
          const bookingDate = format(new Date(booking.bookingDate), 'yyyy-MM-dd');
          if (bookingDate !== selectedDateStr) return false;

          const slotTime = parse(timeSlot, 'HH:mm', new Date());
          const bookingStart = new Date(booking.startTime);
          const bookingEnd = new Date(booking.endTime);

          return isWithinInterval(slotTime, { start: bookingStart, end: bookingEnd });
        });
      }
    });
  };

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      date: selectedDate,
      startTime: '',
      endTime: ''
    }
  })

  const formattedDate = selectedDate?.toLocaleDateString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }) || ''

  const startTime = form.watch('startTime')
  const endTime = form.watch('endTime')

  const handleCheckAvailable = async (data: z.infer<typeof bookingFormSchema>) => {
    if (!selectedDate || !data.startTime || !data.endTime) {
      toast.error("Please select all booking details");
      return;
    }

    // Show loading state while checking availability
    const formattedDate = convertToUtcForID(format(selectedDate, "yyyy-MM-dd"));
    
    try {
      await checkAvailability(formattedDate);
      setIsDialogOpen(false);
      toast.success("Booking details updated successfully!");
    } catch (error) {
      toast.error("Failed to check availability. Please try again.");
      console.error("[ERROR]", error)
    }
  };

  const handleBookRoom = () => {
    const formData = form.getValues()
    if (!selectedDate || !formData.startTime || !formData.endTime) {
      toast.error("Please select all booking details")
      return
    }

    const formattedDate = format(selectedDate, "yyyy-MM-dd")
    const bookingUrl = `/booking?roomId=${roomId}&floorId=a18018a2-3081-40c8-9854-8ef52519fc9b&bookingDate=${formattedDate}&startTime=${formData.startTime}&endTime=${formData.endTime}`
    
    window.location.href = bookingUrl
  }

  if (isLoading) {
    return (
      <div className="container-process-booking md:px-4 space-y-6 mb-4">
        <div className="md:max-w-screen-xl md:px-4 mx-auto">
          <div className="border border-gray-200 bg-[#f1f2f3] md:rounded-md overflow-hidden flex flex-col md:flex-row p-4">
            <div className="animate-pulse space-y-4 w-full">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-process-booking md:px-4 space-y-6 mb-4">
      <div className="md:max-w-screen-xl md:px-4 mx-auto">
        <div className="border border-gray-200 bg-[#f1f2f3] md:rounded-md overflow-hidden flex flex-col md:flex-row py-4">
          
          {/* Booked Slots Section */}
          <div className="px-4 md:px-6 flex-1 mb-4 md:mb-0 md:max-w-md">
            <h3 className="text-lg font-semibold mb-4 mx-2 md:mx-0">Already booked slots for selected date</h3>
            <div className="flex flex-col divide-y divide-gray-300">
              {availableRoom?.bookedList.map((booking) => (
                <div className="py-2 mx-2" key={booking.id}>
                  <div className="flex flex-wrap gap-3 items-center justify-center">
                    <div className="flex gap-2 items-center">
                      <SquareUserRound size={18} color='#1e3a5f'/>
                      <span className='text-xs text-[#1e3a5f] font-medium whitespace-nowrap truncate' style={{ maxWidth: '100px' }}>
                        {booking.bookingCode}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Clock3 size={18} color='#1e3a5f'/>
                      <span className='text-xs text-[#1e3a5f] font-medium whitespace-nowrap truncate' style={{ maxWidth: '150px' }}>
                        {new Date(booking.startTime).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} - 
                        {new Date(booking.endTime).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <LucideCalendarDays size={18} color='#1e3a5f'/>
                      <span className='text-xs text-[#1e3a5f] font-medium whitespace-nowrap truncate' style={{ maxWidth: '120px' }}>
                        {new Date(booking.bookingDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Room Details Section */}
          <div className="p-4 md:p-6 flex-1 bg-white relative mx-4 md:mx-0 md:mr-4 rounded-lg">
            <div className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm md:text-lg font-semibold pr-2 flex-1">{availableRoom?.name}</h4>
                  <div className="flex justify-between cursor-pointer hover:underline" onClick={() => setIsDialogOpen(true)}>
                    <p className='text-sm text-[#666c77]'>Change</p>
                    <ChevronRight size={20} color='#666c77' className="flex-shrink-0"/>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 items-center text-gray-500">
                  <div className="flex gap-1 items-center">
                    <CalendarDays size={14}/>
                    <span className='text-xs whitespace-nowrap'>{formattedDate}</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Clock3 size={14}/>
                    <span className='text-xs whitespace-nowrap'>
                      {startTime || 'Start'} - {endTime || 'End'}
                    </span>
                  </div>
                </div>

                <div className="flex gap-1 text-gray-500">
                  <MapPin size={15} className="flex-shrink-0 mt-1"/>
                  <span className='text-xs line-clamp-2 break-words'>{availableRoom?.address}</span>
                </div>
              </div>

              <div className="text-gray-600 text-xs border-t border-gray-200 pt-2 mt-3">
                {availableRoom?.roomSize}m², {availableRoom?.capacity} attendees
              </div>
            </div>

            <Button 
              className="w-full bg-[#1e3a5f] text-white hover:bg-blue-700"
              onClick={handleBookRoom}
            >
              Book 1 Room
            </Button>
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full sm:max-w-xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-2 sm:w-full">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleCheckAvailable)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Select Date</FormLabel>
                              <FormControl>
                                <Calendar
                                  mode="single"
                                  selected={selectedDate}
                                  onSelect={(date) => {
                                    setSelectedDate(date)
                                    field.onChange(date)
                                  }}
                                  numberOfMonths={2}
                                  disabled={(date) => date < new Date()}
                                  className="h-full w-full flex"
                                  classNames={{
                                    months: "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
                                    month: "space-y-4 w-full flex flex-col",
                                    table: "w-full h-full border-collapse space-y-1",
                                    head_row: "",
                                    row: "mt-2",
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          {/* Start Time */}
                          <FormField
                            control={form.control}
                            name="startTime"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Start Time</FormLabel>
                                <Select
                                  value={field.value}
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                    form.setValue('endTime', '');
                                  }}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select start time" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <ScrollArea className="h-60">
                                    {selectedDate && getAvailableTimeSlots(selectedDate, true).map((timeSlot) => (
                                      <SelectItem key={timeSlot} value={timeSlot}>
                                        {timeSlot}
                                      </SelectItem>
                                    ))}
                                    </ScrollArea>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* End Time */}
                          <FormField
                            control={form.control}
                            name="endTime"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>End Time</FormLabel>
                                <Select
                                  value={field.value}
                                  onValueChange={field.onChange}
                                  disabled={!form.getValues('startTime')}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select end time" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <ScrollArea className="h-60">
                                    {selectedDate && getAvailableTimeSlots(selectedDate, false).map((timeSlot) => (
                                      <SelectItem key={timeSlot} value={timeSlot}>
                                        {timeSlot}
                                      </SelectItem>
                                    ))}
                                    </ScrollArea>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="flex justify-center">
                          <Button type="submit" className="w-40">
                            Check Available
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
} 