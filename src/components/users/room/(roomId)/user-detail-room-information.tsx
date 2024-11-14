import RoomDescription from './user-detail-room-description';
import RoomHeader from './user-detail-room-header-information';
import RoomAmenities from './user-detail-room-amenities';
import RoomLocation from './user-detail-room-location';
import RoomPolicies from './user-detail-room-policies';
import RoomBookingCard from './user-detail-room-booking-card';
import RoomRelevanList from './user-detail-room-relevan-list';

export default function UserDetailRoomInformation() {
  return (
    <div className="main-room-information w-full">
      {/* Heading and Room Info */}
      <RoomHeader/>

      {/* Description */}
      <RoomDescription/>

      {/* Amenities */}
      <RoomAmenities/>

      {/* Location Details */}
      <RoomLocation/>

      {/* Updated Policies Section */}
      <RoomPolicies/>

      {/* Process Booking Section */}
      <RoomBookingCard/>

      {/* Relevan Room List Section */}
      <RoomRelevanList/>
    </div>
  );
}