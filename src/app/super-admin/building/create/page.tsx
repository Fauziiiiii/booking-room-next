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
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBuilding } from "@/lib/building/hooks/useCreateBuilding";

const formSchema = z.object({
    name: z.string().min(1).max(100),
    description: z.string().max(255),
    city: z.string().min(1, { message: 'The city is required' }),
    street: z.string().min(1, { message: 'The street is required' }).max(255),
    postalCode: z.string().min(1, { message: 'The postal code is required' }).max(10),
    country: z.string().min(1, { message: 'The country is required' }),
});

type CreateBuilding = z.infer<typeof formSchema>;

export default function CreateBuildingForm() {
    const { mutate, isPending } = useCreateBuilding();
    const router = useRouter();
    
    const form = useForm<CreateBuilding>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: '',
            city: '',
            street: '',
            postalCode: '',
            country: '',
        }
    });

    const onSubmit = async (values: CreateBuilding) => {
        try {
            mutate(values, {
                onSuccess: () => {
                    form.reset();
                    return toast.success("Success creating new building");
                },
                onError: (error) => {
                    console.error("error create building cik", error)
                    return toast.error("Some error while creating building")
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
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Building Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter building name" {...field} />
                        </FormControl>
                        <FormDescription>Enter the name of the building.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Building Description</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Enter Building description" {...field} />
                        </FormControl>
                        <FormDescription>Enter a brief description of the Building.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter city" {...field} />
                        </FormControl>
                        <FormDescription>Enter the city where the building is located.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Street</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter street" {...field} />
                        </FormControl>
                        <FormDescription>Enter the street where the building is located.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Postal Code</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter postal code" {...field} />
                        </FormControl>
                        <FormDescription>Enter the postal code where the building is located.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter country" {...field} />
                        </FormControl>
                        <FormDescription>Enter the country where the building is located.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <div className="sm:col-span-2 flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => router.push('/super-admin/building')}>Back</Button>
                        {isPending ? (
                            <Button disabled>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>
                        ) : (
                            <Button type="submit" disabled={isPending}>
                                Add building
                            </Button>
                        )}
                </div>
            </form>
        </Form>
    );
}
