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
import { useCreateUser } from "@/lib/users/hooks/useCreateUser";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useCreateCompany } from "@/lib/company/hooks/useCreateCompany";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(1).max(100),
    description: z.string().max(255),
    city: z.string().min(1, { message: 'The city is required' }),
    street: z.string().min(1, { message: 'The street is required' }).max(255),
    postalCode: z.string().min(1, { message: 'The postal code is required' }).max(10),
    country: z.string().min(1, { message: 'The country is required' }),
});

type CreateCompany = z.infer<typeof formSchema>;

export default function CreateUserForm() {
    const { mutate, isPending } = useCreateCompany();
    const router = useRouter();
    
    const form = useForm<CreateCompany>({
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

    const onSubmit = async (values: CreateCompany) => {
        try {
            mutate(values, {
                onSuccess: () => {
                    form.reset();
                    return toast.success("Success creating new company");
                },
                onError: (error) => {
                    console.error("error create company cik", error)
                    return toast.error("Some error while creating company")
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
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter company name" {...field} />
                        </FormControl>
                        <FormDescription>Enter the name of the company.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Company Description</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Enter company description" {...field} />
                        </FormControl>
                        <FormDescription>Enter a brief description of the company.</FormDescription>
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
                        <FormDescription>Enter the city where the company is located.</FormDescription>
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
                        <FormDescription>Enter the street where the company is located.</FormDescription>
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
                        <FormDescription>Enter the postal code where the company is located.</FormDescription>
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
                        <FormDescription>Enter the country where the company is located.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <div className="sm:col-span-2 flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => router.push('/super-admin/company')}>Back</Button>
                        {isPending ? (
                            <Button disabled>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>
                        ) : (
                            <Button type="submit" disabled={isPending}>
                                Add company
                            </Button>
                        )}
                </div>
            </form>
        </Form>
    );
}
