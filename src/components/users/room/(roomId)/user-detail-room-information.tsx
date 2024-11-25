"use client"

import RoomDescription from './user-detail-room-description';
import RoomHeader from './user-detail-room-header-information';
import RoomAmenities from './user-detail-room-amenities';
import RoomLocation from './user-detail-room-location';
import RoomPolicies from './user-detail-room-policies';
import RoomBookingCard from './user-detail-room-booking-card';
import RoomRelevanList from './user-detail-room-relevan-list';
import { useGetByIdRoomWithBookingDate } from '@/lib/room/hooks/useGetByIdRoom';
import { useSearchParams } from 'next/navigation';
import { convertToUtcForID, formatDateForQuery } from '@/lib/utils/dateUtils';

export default function UserDetailRoomInformation({ roomId }: { roomId: string}) {
  const searchParams = useSearchParams();

  const dateParam = searchParams.get('date');
  const dateNow = formatDateForQuery(new Date());
  const formattedDate = dateParam || dateNow;

  const formattedDateForApi = convertToUtcForID(formattedDate);

  const { data, isLoading, isError } = useGetByIdRoomWithBookingDate(roomId, formattedDateForApi);
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading room data.</div>;

  console.log(formattedDateForApi, "cok 1")
  console.log(convertToUtcForID(dateNow), "cok 2")

  
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
        title={data?.name ?? null}
        startTime={data?.operatingHours?.startTime ?? null}
        endTime={data?.operatingHours?.endTime ?? null}
        address={data?.address ?? null}
        capacity={data?.capacity ?? null}
        size={data?.roomSize ?? null}
        roomId={data?.id ?? null}
        bookedList={data?.bookedList ?? []}
      />

      {/* Relevan Room List Section */}
      <RoomRelevanList/>
    </div>
  );
}