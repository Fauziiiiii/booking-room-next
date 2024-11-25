import * as React from "react";
import UserHeader from "../_component/user-header";
import MobileNav from "@/components/users/mobile-nav";

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
            <main className="flex flex-col justify-center items-center mx-auto w-full max-w-screen-xl mt-8 md:mt-20 mb-8 px-5">
                {children}
            </main>

            <footer className="py-4 text-center text-sm text-gray-500">
            &copy; 2024 UzzCorp. All rights reserved.
            </footer>
            <MobileNav/>
        </div>
    );
}
