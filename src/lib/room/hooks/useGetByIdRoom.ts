/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getByIdRoom, getCheckRoomAvailability } from "../actions/get-by-id-room";
import React from "react";

export const useGetByIdRoom = (id: string) => {
    return useQuery({
        queryKey: ["get-by-id-room", id],
        queryFn: async () => await getByIdRoom(id),
    });
};

export const useCheckRoomAvailability = (id: string, bookingDate: string) => {
    return useQuery({
        queryKey: ["check-room-availability", id],
        queryFn: async () => await getCheckRoomAvailability(id, bookingDate),
    });
};

export const useRoomAvailability = (initialRoomId: string, initialDate: string) => {
    const [queryParams, setQueryParams] = React.useState({
        roomId: initialRoomId,
        date: initialDate,
    });

    const {
        data,
        isLoading,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ['roomAvailability', queryParams.roomId, queryParams.date],
        queryFn: () => getCheckRoomAvailability(queryParams.roomId, queryParams.date),
        enabled: !!queryParams.roomId && !!queryParams.date,
    });

    // Function to check availability with new parameters
    const checkAvailability = async (newDate: string) => {
        setQueryParams((prev: any) => ({
            ...prev,
            date: newDate
        }));
        return refetch();
    };

    return {
        availableRoom: data,
        isLoading,
        isError,
        error,
        checkAvailability,
    };
};