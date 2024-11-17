"use client";

import * as React from "react";
import { Check, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGetAllUserForBooking } from "@/lib/users/hooks/useGetAllUser";

export type User = {
  id: string;
  nrp: number;
  userName: string;
  email: string;
  password: string | null;
  phoneNumber: string;
  companyId: string;
  buildingId: string;
  floorId: string;
  createdAt: string;
  updatedAt: string;
};

export function CardsChat() {
  const [open, setOpen] = React.useState(false);
  const [selectedUsers, setSelectedUsers] = React.useState<User[]>([]);

  const { data: users = [], isLoading } = useGetAllUserForBooking(open);

  return (
    <div className="flex ">
      <TooltipProvider delayDuration={0}>
        {selectedUsers.map((user) => (
          <Tooltip key={user.id}>
            <TooltipTrigger asChild>
              <Avatar
                key={user.id}
                className="inline-block border-2 border-background"
              >
                <AvatarImage src="" />
                <AvatarFallback>{user.userName[0]}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>{user.userName}</TooltipContent>
          </Tooltip>
        ))}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
              onClick={() => setOpen(true)}
            >
              <Plus />
              <span className="sr-only">New message</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={10}>New message</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-0 p-0 outline-none">
          <DialogHeader className="px-4 pb-4 pt-5">
            <DialogTitle>New message</DialogTitle>
            <DialogDescription>
              Invite a user to this thread. This will create a new group
              message.
            </DialogDescription>
          </DialogHeader>
          <Command className="overflow-hidden rounded-t-none border-t bg-transparent">
            <CommandInput placeholder="Search user..." />
            <CommandList>
              <CommandGroup className="p-2">
                {isLoading
                  ? Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="flex items-center px-2 animate-pulse">
                        <Avatar>
                          <AvatarFallback className="bg-gray-200 text-gray-200">L</AvatarFallback>
                        </Avatar>
                        <div className="ml-2 w-full">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2 mt-1"></div>
                        </div>
                      </div>
                    ))
                  : users.map((user) => (
                      <CommandItem
                        key={user.id}
                        className="flex items-center px-2"
                        onSelect={() => {
                          if (selectedUsers.includes(user)) {
                            return setSelectedUsers(
                              selectedUsers.filter(
                                (selectedUser) => selectedUser.id !== user.id
                              )
                            );
                          }
                          return setSelectedUsers([...selectedUsers, user]);
                        }}
                      >
                        <Avatar>
                          <AvatarImage src="" alt="Image" />
                          <AvatarFallback>{user.userName[0]}</AvatarFallback>
                        </Avatar>
                        <div className="ml-2">
                          <p className="text-sm font-medium leading-none">
                            {user.userName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                        {selectedUsers.includes(user) ? (
                          <Check className="ml-auto flex h-5 w-5 text-primary" />
                        ) : null}
                      </CommandItem>
                    ))}
              </CommandGroup>
            </CommandList>
          </Command>
          <DialogFooter className="flex items-center border-t p-4 sm:justify-between">
            {selectedUsers.length > 0 ? (
              <div className="flex -space-x-2 space-y-2 overflow-hidden">
                {selectedUsers.map((user) => (
                  <Avatar
                    key={user.id}
                    className="inline-block border-2 border-background"
                  >
                    <AvatarImage src="" />
                    <AvatarFallback>{user.userName[0]}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Select users to add to this thread.
              </p>
            )}
            <Button
              disabled={selectedUsers.length < 2}
              onClick={() => {
                setOpen(false);
              }}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
