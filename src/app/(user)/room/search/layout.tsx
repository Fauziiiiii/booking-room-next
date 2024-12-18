import * as React from "react";

export default function UserRoomSearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-full bg-slate-50">
            {/* <main className="flex flex-col justify-center items-center mx-auto w-full max-w-screen-xl mt-4 mb-8 px-5 bg-slate-500"> */}
            <main className="flex flex-col w-full mx-auto mb-4">
                {children}
            </main>
        </div>
    );
}