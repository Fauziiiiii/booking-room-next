import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBooking } from "../actions/create-booking"
import { CreateBookingDto } from "../dto/create-booking-dto"

export const useCreateBooking = () => {
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn: (newBooking: CreateBookingDto) => createBooking(newBooking),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["get-all-booking"]})
            // return toast.success("Succes create a new room")
        },
        onError: (err) => {
            console.error(err);
            throw err;
        }
    })
}
