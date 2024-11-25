/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import UserDetailRoomImage from '@/components/users/room/(roomId)/user-detail-room-image';
import UserDetailRoomInformation from '@/components/users/room/(roomId)/user-detail-room-information';
import UserDetailRoomMobileHeader from '@/components/users/room/(roomId)/user-detail-room-mobile-header';

export default function UserDetailRoomPage({ params }: { params: { roomId: string }}) {
    return (
        <div className="main-user-detail-room w-full mx-auto">
            {/* Mobile Header */}
            <UserDetailRoomMobileHeader/>
            
            {/* Image Gallery */}
            <UserDetailRoomImage/>

            <UserDetailRoomInformation roomId={params.roomId}/>
        </div>
    );
}
