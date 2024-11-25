import MobileNav from "@/components/users/mobile-nav";
import UserRoomHeader from "../room/_components/user-header";

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <UserRoomHeader/>

            <div className="container max-w-screen-xl mx-auto py-8 px-4">
                <div className="flex flex-col md:flex-row gap-6">
                    {children}
                </div>
            </div>
            <MobileNav/>
        </div>
    );
}