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

const formSchema = z.object({
    userName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
      nrp: z.number(),
      email: z.string().email(),
      phoneNumber: z.string().regex(/^\d{10,12}$/, {
        message: "Nomor telepon harus antara 10-12 digit",
      }),
      companyId: z.string(),
      buildingId: z.string(),
      floorId: z.string(),
})

type UpdateUserSchema = z.infer<typeof formSchema>

interface EditUserProps {
    initialData: {
        id: string;
        userName: string;
        nrp: number;
        email: string;
        phoneNumber: string;
        companyId: string;
        buildingId: string;
        floorId: string;
        createdAt: string;
        updatedAt: string;
    }
}

export default function EditUserForm({ initialData }: EditUserProps) {
    const { mutate, isPending } = useUpdateUser(initialData?.id);
    const router = useRouter();

    const form = useForm<UpdateUserSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData ? {
            userName: initialData.userName,
            nrp: initialData.nrp,
            email: initialData.email || "",
            phoneNumber: initialData.phoneNumber || "",
            companyId: initialData.companyId || "",
            buildingId: initialData.buildingId || "",
            floorId: initialData.floorId || "",
        } : undefined,
    });

    const onUpdate = async (values: UpdateUserSchema) => {
        try {
            console.log("Form values before update:", values);
            
            mutate(values, {
                onSuccess: () => {
                    toast.success("Success updating a user");
                    router.push('/super-admin/user');
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

    // Debug form state
    console.log("Form state:", form.formState);
    console.log("Form errors:", form.formState.errors);
    
    return (
        <Form {...form}>
            <form
                onSubmit={(e) => {
                    console.log("Form submitted");
                    form.handleSubmit(onUpdate)(e);
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
                {/* Username */}
                <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="fauzzee" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* NRP */}
                <FormField
                control={form.control}
                name="nrp"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>NRP</FormLabel>
                    <FormControl>
                        <Input type="text" readOnly {...field} />
                    </FormControl>
                    <FormDescription>NRP of the user.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Email */}
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="paijo32@gmail.com" {...field} />
                    </FormControl>
                    <FormDescription>Email of the user.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Phone Number */}
                <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                        <Input type="tel" placeholder="0839928498" {...field} />
                    </FormControl>
                    <FormDescription>Phone number of the user.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Company Selection */}
                <FormField
                control={form.control}
                name="companyId"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Select Company</FormLabel>
                    <FormControl>
                        <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a company" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem key={23} value={"0af957df-d20d-42da-9af9-3b56566fc226"}>
                                United Tractors Tbk.
                            </SelectItem>
                        </SelectContent>
                        </Select>
                    </FormControl>
                    <FormDescription>Select the company for the user.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Building Selection */}
                <FormField
                control={form.control}
                name="buildingId"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Select Building</FormLabel>
                    <FormControl>
                        <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a building" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem key={1} value={"495b76cf-0920-46c0-8132-242b85f5d407"}>
                                Head Office
                            </SelectItem>
                        </SelectContent>
                        </Select>
                    </FormControl>
                    <FormDescription>Select the building for the user.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Floor Selection */}
                <FormField
                    control={form.control}
                    name="floorId"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Select Floor</FormLabel>
                        <FormControl>
                            <Select onValueChange={field.onChange}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a floor" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem key={1} value={"a18018a2-3081-40c8-9854-8ef52519fc9b"}>
                                    Lantai 7
                                </SelectItem>
                            </SelectContent>
                            </Select>
                        </FormControl>
                        <FormDescription>Select the floor for the user.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="sm:col-span-2 flex justify-end space-x-2">
                    <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => router.push('/super-admin/user')}
                    >
                        Back
                    </Button>
                    <Button 
                        type="submit" 
                        disabled={isPending}
                    >
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </>
                        ) : (
                            'Update user'
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
