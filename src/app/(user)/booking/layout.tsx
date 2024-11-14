import * as React from "react";
import UserBookingHeader from "./_components/user-booking-header";

export default function UserRoomLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Header */}
            <UserBookingHeader/>

            {/* Main Content */}
            {children}
        </div>
    );
}
