import * as React from "react";

export default function UserRoomLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col w-full mx-auto mb-4">
                {children}
            </div>
        </div>
    );
}
