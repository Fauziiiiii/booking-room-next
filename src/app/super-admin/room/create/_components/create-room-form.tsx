"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useCreateRoom } from "@/lib/room/hooks/useCreateRoom";
import { Floor } from "@/types/floor";
import { Textarea } from "@/components/ui/textarea";
import { Building } from "@/types/building";
import { AutosizeTextarea } from "@/components/ui/auto-size-text-area";

const formSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    description: z.string(),
    capacity: z.number().min(1, "Minimum capacity is 1").max(50),
    status: z.string().min(1, "Status is required").max(50),
    floorId: z.string().min(1, "Please select a floor"),
    buildingId: z.string().min(1, "Please select a floor"),
});

type CreateRoomSchema = z.infer<typeof formSchema>;

interface CreateRoomProps {
    buildingsData: Building[]
    floorsData: Floor[],
}

export default function CreateRoomForm({ buildingsData, floorsData }: CreateRoomProps) {
    const { mutate, isPending } = useCreateRoom();
    const router = useRouter();
    
    const form = useForm<CreateRoomSchema>({    
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: '',
            capacity: 1,
            status: '',
            floorId: '',
            buildingId: '',
        }
    });

    const onSubmit = async (values: CreateRoomSchema) => {
        try {
            mutate(values, {
                onSuccess: () => {
                    form.reset();
                    return toast.success("Success creating new room");
                },
                onError: (error) => {
                    console.error("error create room cik", error)
                    return toast.error("Some error while creating room")
                }
            })
        } catch(err){
            console.log("sudah error banget", err)
            return toast.error("Error geden cikk")
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
            >
                {/* First Row: Name and Description */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Room Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Room Name" {...field} />
                                </FormControl>
                                <FormDescription>Name of the room.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Status</FormLabel>
                                <FormControl>
                                    <Input placeholder="Room Status" {...field} />
                                </FormControl>
                                <FormDescription>Status of the room (e.g., Available, Occupied).</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Second Row: Capacity, Status, and Floor */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FormField
                        control={form.control}
                        name="capacity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Capacity</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Capacity" {...field} 
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                </FormControl>
                                <FormDescription>Capacity of the room (1-50 people).</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="buildingId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select Building</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a building" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {buildingsData?.map((building) => (
                                                <SelectItem key={building.id} value={building.id}>
                                                    {building.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription>Select the building for the room.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="floorId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select Floor</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a floor" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {floorsData?.map((floor) => (
                                                <SelectItem key={floor.id} value={floor.id}>
                                                    {floor.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription>Select the floor for the room.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Building Description</FormLabel>
                            <FormControl>
                                <AutosizeTextarea placeholder="Enter Building description" {...field} maxHeight={200} />
                            </FormControl>
                            <FormDescription>Enter a brief description of the Building.</FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => router.push('/super-admin/room')}>Back</Button>
                    {isPending ? (
                        <Button disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button>
                    ) : (
                        <Button type="submit" disabled={isPending}>
                            Add room
                        </Button>
                    )}
                </div>
            </form>
        </Form>
    );
}