"use client"

import RoomDescription from './user-detail-room-description';
import RoomHeader from './user-detail-room-header-information';
import RoomAmenities from './user-detail-room-amenities';
import RoomLocation from './user-detail-room-location';
import RoomPolicies from './user-detail-room-policies';
import RoomBookingCard from './user-detail-room-booking-card';
import RoomRelevanList from './user-detail-room-relevan-list';
import { useGetByIdRoom } from '@/lib/room/hooks/useGetByIdRoom';

export default function UserDetailRoomInformation({ roomId }: { roomId: string}) {
  const { data, isLoading, isError } = useGetByIdRoom(roomId);
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading room data.</div>;
  
  return (
    <div className="main-room-information w-full">
      {/* Heading and Room Info */}
      <RoomHeader
        title={data?.name ?? null}
        city={data?.city ?? null}
        location={`${data?.buildingName}, ${data?.floorName}`}
        capacity={data?.capacity ?? null}
        size={137.0}
        rating={5.0}
        reviews={100}
      />

      {/* Description */}
      <RoomDescription
        title={`About ${data?.name}`}
        description={data?.description || "No Description available."}
      />

      {/* Amenities */}
      <RoomAmenities
        facilities={data?.facilities || []}
      />

      {/* Location Details */}
      <RoomLocation/>

      {/* Updated Policies Section */}
      <RoomPolicies
        operatingHours={data?.operatingHours ?? null}
        policies={data?.policies || []}
      />

      {/* Process Booking Section */}
      <RoomBookingCard
        roomId={data?.id ?? null}
      />

      {/* Relevan Room List Section */}
      <RoomRelevanList
        title={data?.name ?? null}
        floorId={data?.floorId ?? null}
      />
    </div>
  );
}