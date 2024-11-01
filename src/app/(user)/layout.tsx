import * as React from "react";
import UserHeader from "./_component/user-header";

export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Header */}
            <UserHeader/>

            {/* Main Content */}
            <main className="flex flex-col justify-center items-center mx-auto w-full max-w-screen-xl mt-8 md:mt-20 mb-8 px-4">
                {children}
            </main>
        </div>
    );
}
