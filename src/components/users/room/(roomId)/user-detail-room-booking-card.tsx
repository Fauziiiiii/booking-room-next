/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { CalendarDays, ChevronRight, Clock3, LucideCalendarDays, MapPin, SquareUserRound } from 'lucide-react'
import React, { useState } from 'react'
import RoomBookingDialog from './user-detail-room-dialog-form'

export default function RoomBookingCard() {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <div className="container-process-booking md:px-4 space-y-6 mb-4">
                <div className="md:max-w-screen-xl md:px-4 mx-auto">
                {/* Card Rekomendasi */}
                <div className="border border-gray-200 bg-[#f1f2f3] md:rounded-md overflow-hidden flex flex-col md:flex-row py-4">
                    
                    {/* Left Section*/}
                    <div className="px-4 md:px-6 flex-1 mb-4 md:mb-0 md:max-w-md">
                    <h3 className="text-lg font-semibold mb-4 mx-2 md:mx-0">Already booked slots for selected date</h3>
                    
                    <div className="flex flex-col divide-y divide-gray-300">
                        {/* Booking Row - Responsive */}
                        <div className="py-2 mx-2">
                        <div className="flex flex-wrap gap-3 items-center justify-center">
                            <div className="flex gap-2 items-center">
                            <SquareUserRound size={18} color='#1e3a5f'/>
                            <span className='text-xs text-[#1e3a5f] font-medium whitespace-nowrap truncate' style={{ maxWidth: '100px' }}>BOOK2884923</span>
                            </div>
                            <div className="flex gap-2 items-center">
                            <Clock3 size={18} color='#1e3a5f'/>
                            <span className='text-xs text-[#1e3a5f] font-medium whitespace-nowrap truncate' style={{ maxWidth: '150px' }}>06:30 - 08:00</span>
                            </div>
                            <div className="flex gap-2 items-center">
                            <LucideCalendarDays size={18} color='#1e3a5f'/>
                            <span className='text-xs text-[#1e3a5f] font-medium whitespace-nowrap truncate' style={{ maxWidth: '120px' }}>Nov 14, 2024</span>
                            </div>
                        </div>
                        </div>
                        
                        <div className="py-2 mx-2">
                        <div className="flex flex-wrap gap-3 items-center justify-center">
                            <div className="flex gap-2 items-center">
                            <SquareUserRound size={18} color='#1e3a5f'/>
                            <span className='text-xs text-[#1e3a5f] font-medium whitespace-nowrap truncate' style={{ maxWidth: '100px' }}>BOOK2884924</span>
                            </div>
                            <div className="flex gap-2 items-center">
                            <Clock3 size={18} color='#1e3a5f'/>
                            <span className='text-xs text-[#1e3a5f] font-medium whitespace-nowrap truncate' style={{ maxWidth: '150px' }}>08:30 - 09:30</span>
                            </div>
                            <div className="flex gap-2 items-center">
                            <LucideCalendarDays size={18} color='#1e3a5f'/>
                            <span className='text-xs text-[#1e3a5f] font-medium whitespace-nowrap truncate' style={{ maxWidth: '120px' }}>Nov 14, 2024</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    {/* Right Side - Detail Room */}
                    <div className="p-4 md:p-6 flex-1 bg-white relative mx-4 md:mx-0 md:mr-4 rounded-lg">
                        <div className="border border-gray-200 rounded-lg p-4 mb-4">
                            <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <h4 className="text-sm md:text-lg font-semibold pr-2 flex-1">Heading Title for Office Space Building</h4>
                                <div className="flex justify-between cursor-pointer hover:underline" onClick={handleOpen}>
                                    <p className='text-sm text-[#666c77]'>Change</p>
                                    <ChevronRight size={20} color='#666c77' className="flex-shrink-0 hover:underline"/>
                                </div>
                            </div>
                            
                            <p className="text-green-600 text-xs">100% Refund & Reschedule until 16 Dec 2024</p>
                            
                            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center text-gray-500">
                                <div className="flex gap-1 items-center">
                                <CalendarDays size={14}/>
                                <span className='text-xs whitespace-nowrap'>14 Nov, 2024</span>
                                </div>
                                <div className="flex gap-1 items-center">
                                <Clock3 size={14}/>
                                <span className='text-xs whitespace-nowrap'>10:00 - 11:00</span>
                                </div>
                            </div>

                            {/* <div className="flex gap-1 text-gray-500">
                                <MapPin size={15} className="flex-shrink-0 mt-1"/>
                                <span className='text-xs line-clamp-2 break-words'>
                                Jl. Jenderal Ahmad Yani No.Kav 49, RT.16/RW.9, Rawasari, Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia
                                </span>
                            </div> */}
                            </div>

                            <div className="text-gray-600 text-xs border-t border-gray-200 pt-2 mt-3">
                            48.0m², 8 attendees
                            </div>
                        </div>

                        <button 
                            className="w-full bg-[#1e3a5f] text-white py-2 text-sm rounded-md hover:bg-blue-700 font-semibold transition-colors"
                            onClick={() => window.location.href='/booking?roomId=230ac29f-683c-48f9-9fc5-7d1da3b28e5c&floorId=a18018a2-3081-40c8-9854-8ef52519fc9b&bookingDate=2024-11-15&startTime=07:00&endTime=08:30'}
                        >
                            Book 1 Room
                        </button>
                    </div>
                </div>
                </div>
            </div>

            <RoomBookingDialog open={open} onClose={handleClose} />
        </>
    )
}
