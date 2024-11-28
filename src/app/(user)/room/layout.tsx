import * as React from "react";
import UserRoomHeader from "./_components/user-header";

export default function UserRoomLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Header */}
            <UserRoomHeader/>

            {/* Main Content */}
            {children}

            <footer className="py-4 text-center text-sm text-gray-500">
                &copy; 2024 UzzCorp. All rights reserved.
            </footer>
        </div>
    );
}
