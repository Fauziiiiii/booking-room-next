import { useQuery } from "@tanstack/react-query";
import { getAllRoomByIdFloor } from "@/lib/room/actions/get-all-room-by-id-floor";
import LoadingUserHomePage from "@/app/(user)/_component/loading";
import RoomCard from "./room-card-home";
import { useGetAllRoomByIdFloor, useGetAllRoomByIdFloorWithLimit } from "@/lib/room/hooks/useGetAllRoomByIdFloor";

interface RoomListProps {
    floor: string;
}

const limit = 4;

export function RoomList({ floor }: RoomListProps) {
    const { data: rooms, isLoading } = useGetAllRoomByIdFloorWithLimit(floor, limit)
    if (isLoading) return <LoadingUserHomePage />;

    return (
        <div className="w-full">
            {/* Grid layout untuk layar besar */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-6">
                {rooms?.map((room) => (
                    <RoomCard key={room.id} room={room} isVertical={false}/>
                ))}
            </div>
            {/* Carousel layout untuk layar kecil */}
            <div className="flex lg:hidden overflow-x-auto space-x-4 p-4 no-scrollbar">
                {rooms?.map((room) => (
                    <div key={room.id} className="flex-shrink-0 w-full sm:w-80">
                        <RoomCard room={room} isVertical={true} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function LoadingOk() {
    return (
        <div className="absolute top-0 left-0 w-full h-1">
            <div className="h-full bg-blue-500 animate-pulse"/>
        </div>
    )
}