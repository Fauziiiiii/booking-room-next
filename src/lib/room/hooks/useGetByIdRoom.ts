import { useQuery } from "@tanstack/react-query";
import { getByIdRoom, getByIdRoomWithBookingDate } from "../actions/get-by-id-room";

export const useGetByIdRoom = (id: string) => {
    return useQuery({
        queryKey: ["get-by-id-room", id],
        queryFn: async () => await getByIdRoom(id),
    });
};

export const useGetByIdRoomWithBookingDate = (id: string, bookingDate: string) => {
    return useQuery({
        queryKey: ["get-by-id-room", id],
        queryFn: async () => await getByIdRoomWithBookingDate(id, bookingDate),
    });
};
