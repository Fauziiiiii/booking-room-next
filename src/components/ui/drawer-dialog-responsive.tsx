"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DrawerDialogDemo2 from "./drawer-dialog-responsive-2"

export default function DrawerDialogDemo() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button
                        className="w-full bg-[#1E3A5F] text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition-colors duration-200"
                    >
                        Search
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
            <button
                className="w-full bg-[#1E3A5F] text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition-colors duration-200"
            >
                Search
            </button>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
                Make changes to your profile here. Click save when you&apos;re done.
            </DrawerDescription>
            </DrawerHeader>
            <ProfileForm className="px-4" />
            <DrawerFooter className="pt-2">
            <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
            </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
    )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
    const isDesktop2 = useMediaQuery("(min-width: 768px)")
    if(!isDesktop2){
        return (
            <form className={cn("grid items-start gap-4", className)}>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" defaultValue="shadcn@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@shadcn" />
                </div>
                <DrawerDialogDemo2/>
                <Button type="submit">Save changes</Button>
            </form>
        )
    }
    
    return (
        <form className={cn("grid items-start gap-4", className)}>
        <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" defaultValue="shadcn@example.com" />
        </div>
        <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@shadcn" />
        </div>
        <Button type="submit">Save changes</Button>
        </form>
    )
}
