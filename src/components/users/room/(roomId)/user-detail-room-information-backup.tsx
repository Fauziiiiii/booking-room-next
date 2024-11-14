/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState } from 'react';
import { Star, MapPin, Users, Home, FileText, Clock3, SquareUserRound, Calendar, ChevronRight, LucideCalendarDays } from 'lucide-react';
import { apalah } from './user-detail-room-description';
import { useGetAllRoomByIdFloorWithLimit } from '@/lib/room/hooks/useGetAllRoomByIdFloor';
import LoadingUserHomePage from '@/app/(user)/_component/loading';
import UserDetailRoomCard from './user-detail-room-card-list';

export default function UserDetailRoomInformation() {
  const { data: rooms, isLoading } = useGetAllRoomByIdFloorWithLimit("a18018a2-3081-40c8-9854-8ef52519fc9b", 5)
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const toggleAmenities = () => {
    setShowAllAmenities(!showAllAmenities);
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const descriptionTitle = "About Heading Title for Office Space Building"
  const visibleDescriptionTitle = `${descriptionTitle.slice(0, 23)}...`;
  
  const maxChars = 250;
  const isLongText = apalah.length > maxChars;
  const displayedText = isExpanded ? apalah : `${apalah.slice(0, maxChars)}...`;

  const amenities = ["Kolam Renang", "AC", "Dapur", "Kulkas", "TV Smart", "Teras atau Balkon", "WiFi", "Breakfast", "Parking", "Garden Area", "Landline", "Medical", "Projector", "Whiteboards"];
  const visibleAmenities = showAllAmenities ? amenities : amenities.slice(0, 6);

  return (
    <div className="main-room-information w-full">
      {/* Heading and Room Info */}
      <div className="container-header-room-information w-full p-4">
        <div className="md:max-w-screen-xl md:px-4 mx-auto py-4 border-b border-gray-300">
          <div className="container-room-name mb-2">
            <h1 className="text-2xl font-bold">Heading Title for Office Space Building</h1>
          </div>
          <div className="container-room-info-loc-review flex items-center text-gray-500 overflow-x-auto mb-2">
            {/* Rating */}
            <div className="flex items-center gap-1">
              <Star size={16} className="text-gray-700" />
              <span className="text-sm">5.0 • </span><span className='text-xs md:text-sm underline'>100 reviews</span>
            </div>
            
            {/* Location */}
            <div className="flex items-center gap-1 ml-2">
              <MapPin size={16} className="text-gray-700" />
              <span className="text-xs md:text-sm underline">(Cakung, Jakarta Timur)</span>
            </div>
            
            {/* Host Info */}
            {/* <div className="flex items-center gap-1">
              <Building2 size={16} className="text-gray-700" />
              <span className="text-xs md:text-sm">Tower building, Lantai 7</span>
            </div> */}
          </div>

          <div className="container-room-info-loc-review flex items-center text-gray-500 overflow-x-auto">
            {/* Location */}
            <div className="flex items-center gap-1">
              <Users size={16} className="text-gray-700" />
              <span className="text-xs md:text-sm">12 Guest</span>
            </div>
            {/* Room size */}
            <div className="flex items-center gap-1 ml-2">
              <Home size={16} className="text-gray-700" />
              <span className="text-xs md:text-sm">137.0m²</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="container-description w-full p-4">
      <div className="md:max-w-screen-xl md:px-4 mx-auto border-b border-gray-300 pb-4">
        {/* Header container with improved layout */}
        <div className="flex flex-wrap items-start gap-2 mb-4">
          {/* Title container with proper truncation */}
          <div className="flex-1 min-w-0 pr-4">
            <h2 className="text-xl font-semibold truncate">
              {descriptionTitle}
            </h2>
          </div>
          
          {/* Button container that stays aligned */}
          {isLongText && (
            <div className="flex-shrink-0">
              <button
                onClick={toggleDescription}
                className="text-[#1e3a5f] text-sm font-semibold hover:text-[#2c578f] transition-colors
                  whitespace-nowrap px-2 py-1 rounded"
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>

        {/* Description text with proper spacing */}
        <div className="prose max-w-none">
          <p className="text-gray-700 text-base leading-relaxed">
            {displayedText}
          </p>
        </div>
      </div>
    </div>

      {/* Amenities */}
      <div className="container-amenities w-full p-4">
        <div className="md:max-w-screen-xl md:px-4 mx-auto border-b border-gray-300 pb-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            {amenities.length > 6 && (
              <button
                onClick={toggleAmenities}
                className="text-[#1e3a5f] text-sm font-semibold mt-2"
              >
                {showAllAmenities ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {visibleAmenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-700">
                {/* Replace this emoji with appropriate icons if available */}
                <span className="text-gray-600">🏊</span> {/* Icon example */}
                <span className="text-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Details */}
      <div className="container-package w-full p-4"> 
        <div className="md:max-w-screen-xl md:px-4 mx-auto border-b border-gray-300 pb-4">
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          
          {/* Container for map and address */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            {/* Map container - Full width on mobile, left side on desktop */}
            <div className="w-full h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37889.32874609485!2d106.89990111349987!3d-6.183765399999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4a89f8e595f%3A0x1cea17f70d586889!2sPT%20United%20Tractors%20Tbk!5e1!3m2!1sid!2sid!4v1731404269605!5m2!1sid!2sid"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Address Details - Full width on mobile, right side on desktop */}
            <div className="w-full bg-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Detail Address</h3>
              <p className="text-sm text-gray-600">
                Jl. Jenderal Ahmad Yani No.Kav 49, RT.16/RW.9, Rawasari, Kec. Cemp. Putih,
                Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Policies Section */}
      <div className="container-policies w-full p-4">
        <div className="md:max-w-screen-xl md:px-4 mx-auto">
          <h2 className="text-xl font-semibold mb-6">Terms & Conditions </h2>

          {/* Operational Hours */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Clock3 size={24} className="text-gray-700" />
              <h3 className="text-lg font-semibold">Operating Hours</h3>
            </div>
            <div className="ml-9">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Waktu Penggunaan Mulai</p>
                  <p className="text-base font-medium">06:00 - 21:00</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Waktu Penggunaan Berakhir</p>
                  <p className="text-base font-medium">21:00</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Penggunaan di luar jam operasional memerlukan persetujuan dan mungkin dikenakan biaya tambahan.
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Pengguna harus melapor jika ada perubahan jadwal atau waktu kedatangan untuk menghindari masalah pemakaian ruangan.
              </p>
              <button className="text-blue-600 text-sm hover:underline">
                Selengkapnya
              </button>
            </div>
          </div>

          {/* Other Policies */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FileText size={24} className="text-gray-700" />
              <h3 className="text-lg font-semibold">More Policies</h3>
            </div>
            <div className="ml-9 space-y-6">
              
              {/* Cancellation Policy */}
              <div>
                <h4 className="font-medium mb-2">Kebijakan Pembatalan</h4>
                <p className="text-sm text-gray-600 mb-1">
                  Pembatalan pemakaian ruangan harus dilakukan minimal 24 jam sebelum waktu penggunaan untuk menghindari biaya pembatalan.
                </p>
                <p className="text-sm text-gray-600">
                  Pembatalan dalam waktu kurang dari 24 jam akan dikenakan biaya sebesar 50% dari biaya sewa.
                </p>
              </div>

              {/* Cleanliness Policy */}
              <div>
                <h4 className="font-medium mb-2">Kebersihan dan Kerapihan</h4>
                <p className="text-sm text-gray-600">
                  Pengguna wajib menjaga kebersihan dan kerapihan ruangan selama dan setelah penggunaan. Harap buang sampah pada tempat yang disediakan.
                </p>
              </div>

              {/* No Smoking Policy */}
              <div>
                <h4 className="font-medium mb-2">Larangan Merokok</h4>
                <p className="text-sm text-gray-600">
                  Merokok dilarang di dalam ruangan. Pengguna yang melanggar kebijakan ini akan dikenakan denda sesuai ketentuan pengelola.
                </p>
              </div>

              {/* Security and Safety Policy */}
              <div>
                <h4 className="font-medium mb-2">Keamanan dan Keselamatan</h4>
                <p className="text-sm text-gray-600">
                  Pengguna bertanggung jawab atas keamanan barang pribadi mereka. Dalam keadaan darurat, ikuti petunjuk evakuasi yang tertera di ruangan.
                </p>
              </div>

              {/* Usage Capacity Policy */}
              <div>
                <h4 className="font-medium mb-2">Kapasitas Penggunaan</h4>
                <p className="text-sm text-gray-600">
                  Jumlah pengguna tidak boleh melebihi kapasitas ruangan yang telah ditentukan. Penambahan kapasitas harus disetujui terlebih dahulu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Booking Section */}
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
                    <h4 className="text-lg font-semibold pr-2 flex-1">Heading Title for Office Space Building</h4>
                    <div className="flex justify-between cursor-pointer hover:underline">
                      <p className='text-sm text-[#666c77]'>Change</p>
                      <ChevronRight size={20} color='#666c77' className="flex-shrink-0 hover:underline"/>
                    </div>
                  </div>
                  
                  <p className="text-green-600 text-sm">100% Refund & Reschedule until 16 Dec 2024</p>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-2 items-center text-gray-500">
                    <div className="flex gap-1 items-center">
                      <Calendar size={14}/>
                      <span className='text-xs whitespace-nowrap'>14 Nov, 2024</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <Clock3 size={14}/>
                      <span className='text-xs whitespace-nowrap'>10:00 - 11:00</span>
                    </div>
                  </div>

                  <div className="flex gap-1 text-gray-500">
                    <MapPin size={15} className="flex-shrink-0 mt-1"/>
                    <span className='text-xs line-clamp-2 break-words'>
                      Jl. Jenderal Ahmad Yani No.Kav 49, RT.16/RW.9, Rawasari, Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia
                    </span>
                  </div>
                </div>

                <div className="text-gray-600 text-sm border-t border-gray-200 pt-2 mt-3">
                  48.0m², 8 attendees
                </div>
              </div>

              <button 
                className="w-full bg-[#1e3a5f] text-white py-3 rounded-md hover:bg-blue-700 font-semibold transition-colors"
                onClick={() => window.location.href='/room/checkout'}
              >
                Book 1 Room
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-list-relevan-room pb-4                                                ">
        <div className="flex flex-col gap-4 max-w-screen-xl mx-auto md:px-4">
          <div className="mx-4">
            <h2 className="text-xl font-semibold mb-2">Similar room around Ascor Sudirman Jakarta</h2>
          </div>
          {isLoading ? <LoadingUserHomePage /> : ""}

          {/* Grid Layout Desktop */}
          {/* <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-4">
            {rooms?.map((room) => (
              <UserDetailRoomCard key={room.floorId} room={room} isVertical={true} />
            ))}
          </div> */}

          {/* Carousel Layout Mobile */}
          <div className="flex overflow-x-scroll no-scrollbar space-x-4 px-4">
            {rooms?.map((room) => (
              <div className="max-w-[207] md:max-w-[220px] flex-shrink-0 mb-4">
                <UserDetailRoomCard key={room.floorId} room={room} isVertical={true} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}