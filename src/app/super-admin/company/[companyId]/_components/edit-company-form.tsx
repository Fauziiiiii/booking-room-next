/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { toast } from 'sonner'
import { z } from 'zod'
import { useUpdateUser } from '@/lib/users/hooks/useUpdateUser'
import { Loader2 } from 'lucide-react'
import { useUpdateCompany } from '@/lib/company/hooks/useUpdateCompany'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
    name: z.string().min(1).max(100),
    description: z.string().max(255),
    city: z.string().min(1, { message: 'The city is required' }),
    street: z.string().min(1, { message: 'The street is required' }).max(255),
    postalCode: z.string().min(1, { message: 'The postal code is required' }).max(10),
    country: z.string().min(1, { message: 'The country is required' }),
});

type UpdateCompanySchema = z.infer<typeof formSchema>

interface EditCompanyProps {
    initialData: {
        id: string;
        name: string;
        description: string;
        city: string;
        street: string;
        postalCode: string;
        country: string;
    }
}

export default function EditCompanyForm({ initialData }: EditCompanyProps) {
    const { mutate, isPending } = useUpdateCompany(initialData?.id);
    const router = useRouter();

    const form = useForm<UpdateCompanySchema>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData ? {
            name: initialData?.name,
            description: initialData?.description,
            city: initialData?.city,
            street: initialData?.street,
            postalCode: initialData?.postalCode,
            country: initialData?.country
        } : undefined,
    });

    const onUpdate = async (values: UpdateCompanySchema) => {
        try {
            mutate(values, {
                onSuccess: () => {
                    toast.success("Success updating a company");
                    router.push('/super-admin/company');
                },
                onError: (error) => {
                    console.error("Error updating user:", error);
                    toast.error("Failed to update user");
                }
            });
        } catch (error) {
            console.error("Unexpected error:", error);
            toast.error("An unexpected error occurred");
        }
    };
    
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onUpdate)}
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
                                Update company
                            </Button>
                        )}
                </div>
            </form>
        </Form>
    )
}
