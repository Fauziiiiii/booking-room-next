import { useQuery } from "@tanstack/react-query";
import { searchRoom } from "../actions/search-room";

export const useSearchRoom = (
    category: string | null,
    categoryValue: string | null,
    date: string | null,
    attendees: number | null
) => {
    return useQuery({
        queryKey: ['rooms', category, categoryValue, date, attendees],
        queryFn: () => searchRoom({ category, categoryValue, date, attendees }),
        enabled: !!category && !!categoryValue,
    });
};