/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format, setHours, setMinutes, isBefore, isEqual } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define schema untuk validasi form
const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  startTime: z.date({
    required_error: "A start time is required.",
  }),
  endTime: z.date({
    required_error: "An end time is required.",
  }),
}).refine((data) => isBefore(data.startTime, data.endTime) || isEqual(data.startTime, data.endTime), {
  message: "End time must be after start time.",
  path: ["endTime"],
});

export function DatePickerForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [startTime, setStartTime] = useState<string | undefined>();
  const [endTime, setEndTime] = useState<string | undefined>();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(`Selected date: ${format(data.dob, "PPP")}, 
                   Start Time: ${format(data.startTime, "HH:mm")}, 
                   End Time: ${format(data.endTime, "HH:mm")}`);
  }

  function handleTimeChange(time: string, type: "start" | "end") {
    const [hours, minutes] = time.split(":").map(Number);
    const newTime = setMinutes(setHours(new Date(selectedDate || new Date()), hours), minutes);

    if (type === "start") {
      setStartTime(time);
      form.setValue("startTime", newTime);
    } else {
      setEndTime(time);
      form.setValue("endTime", newTime);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid sm:flex-col gap-4">
          {/* Date Picker */}
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Select Date</FormLabel>
                <FormControl>
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      setSelectedDate(date);
                      field.onChange(date);
                    }}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="h-full w-full flex"
                    classNames={{
                      months: "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
                      month: "space-y-4 w-full flex flex-col",
                      table: "w-full h-full border-collapse space-y-1",
                      head_row: "",
                      row: "mt-2",
                    }}
                  />
                </FormControl>
                <FormDescription>
                  provided by{" "}
                  <a
                    href="https://ui.shadcn.com/docs/components/date-picker#form"
                    target="_blank"
                    className="underline"
                  >
                    shadcn
                  </a>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Start Time Picker */}
            <FormField
                control={form.control}
                name="startTime"
                render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                    <Select
                        defaultValue={startTime}
                        onValueChange={(e) => handleTimeChange(e, "start")}
                    >
                        <SelectTrigger className="font-normal focus:ring-0 w-100%">
                            <SelectValue placeholder="Select start time" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                        <ScrollArea className="h-[15rem]">
                            {Array.from({ length: 96 }).map((_, i) => {
                            const hour = String(Math.floor(i / 4)).padStart(2, "0");
                            const minute = String((i % 4) * 15).padStart(2, "0");
                            const timeValue = `${hour}:${minute}`;
                            return (
                                <SelectItem key={i} value={timeValue}>
                                {timeValue}
                                </SelectItem>
                            );
                            })}
                        </ScrollArea>
                        </SelectContent>
                    </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            {/* End Time Picker */}
            <FormField
                control={form.control}
                name="endTime"
                render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>End Time</FormLabel>
                    <FormControl>
                    <Select
                        defaultValue={endTime}
                        onValueChange={(e) => handleTimeChange(e, "end")}
                    >
                        <SelectTrigger className="font-normal focus:ring-0 w-full">
                        <SelectValue placeholder="Select end time" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                        <ScrollArea className="h-[15rem]">
                            {Array.from({ length: 96 }).map((_, i) => {
                            const hour = String(Math.floor(i / 4)).padStart(2, "0");
                            const minute = String((i % 4) * 15).padStart(2, "0");
                            const timeValue = `${hour}:${minute}`;
                            return (
                                <SelectItem key={i} value={timeValue}>
                                {timeValue}
                                </SelectItem>
                            );
                            })}
                        </ScrollArea>
                        </SelectContent>
                    </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
          </div>

        </div>
        <div className="flex justify-center">
          <Button type="submit" className="w-[40%]">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
