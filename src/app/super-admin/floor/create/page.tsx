"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from 'lucide-react';

// Building schema
const buildingSchema = z.object({
  name: z.string().min(3, 'Building name must be at least 3 characters'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  description: z.string().optional(),
});

type BuildingFormData = z.infer<typeof buildingSchema>;

export default function BuildingEditForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Pre-populate form with existing building data
  const initialValues: BuildingFormData = {
    name: 'Corporate Tower A',
    address: '123 Business District',
    description: 'Modern office building with premium amenities',
  };

  const form = useForm<BuildingFormData>({
    resolver: zodResolver(buildingSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (data: BuildingFormData) => {
    try {
      setIsLoading(true);
      // Call API to update building
    //   await updateBuilding(data);
      setIsLoading(false);
      router.push('/buildings');
    } catch (error) {
      setIsLoading(false);
      console.error('Error updating building:', error);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Edit Building</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Building Name
            </label>
            <Input
              id="name"
              {...form.register('name')}
              placeholder="Enter building name"
            />
            <p className="text-red-500 text-sm">{form.formState.errors.name?.message}</p>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium">
              Address
            </label>
            <Input
              id="address"
              {...form.register('address')}
              placeholder="Enter building address"
            />
            <p className="text-red-500 text-sm">{form.formState.errors.address?.message}</p>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              {...form.register('description')}
              placeholder="Enter building description"
            />
          </div>

          <div className="flex justify-end">
            <Button 
              type="submit"
              variant="outline"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}