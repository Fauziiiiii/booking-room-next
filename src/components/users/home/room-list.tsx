import { useQuery } from "@tanstack/react-query";
import { getAllRoomByIdFloor } from "@/lib/room/actions/get-all-room-by-id-floor";
import LoadingUserHomePage from "@/app/(user)/_component/loading";
import RoomCard from "./room-card-home";
import { useGetAllRoomByIdFloor, useGetAllRoomByIdFloorWithLimit } from "@/lib/room/hooks/useGetAllRoomByIdFloor";
import Link from "next/link";

interface RoomListProps {
    floor: string;
}

const limit = 4;
export function RoomList({ floor }: RoomListProps) {
    const { data: rooms, isLoading } = useGetAllRoomByIdFloorWithLimit(floor, limit)
    if (isLoading) return <LoadingUserHomePage />;

    return (
        <div className="w-full">
            {/* Grid layout untuk layar besar (4 kolom) */}
            {/* <div className="hidden lg:grid lg:grid-cols-4 gap-6">
                {rooms?.map((room) => (
                    <RoomCard key={room.id} room={room} isVertical={true} />
                ))}
            </div> */}
            {/* Carousel layout untuk layar kecil */}
            {/* <div className="hidden lg:grid lg:grid-cols-2 gap-6">
                {rooms?.map((room) => (
                        <RoomCard room={room} isVertical={true} />
                ))}
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {rooms?.map((room) => (
                    <RoomCard key={room.id} room={room} isVertical={true} />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <Link href={`/room/search?roomId=a18018a2-3081-40c8-9854-8ef52519fc9b`}>
                    <button
                        className="bg-[#e8ebef] text-[#1e3a5f]  px-6 py-2 rounded-lg font-semibold hover:bg-[#bbc3cf] transition duration-200"
                    >
                        Lihat Selengkapnya
                    </button>
                </Link>
            </div>
        </div>
    );
}