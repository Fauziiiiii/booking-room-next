// "use client"

// import {
//     BadgeCheck,
//     Bell,
//     ChevronsUpDown,
//     CreditCard,
//     LogOut,
//     Sparkles,
//   } from "lucide-react"
  
//   import {
//     Avatar,
//     AvatarFallback,
//     AvatarImage,
//   } from "@/components/ui/avatar"
//   import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuGroup,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
//   } from "@/components/ui/dropdown-menu"
//   import {
//     SidebarMenuButton,
//   } from "@/components/ui/sidebar"
//   import { logout } from "@/app/(auth)/sign-in/actions"
// import { Button } from "@/components/ui/button"

// export default function NavUser() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           size="lg"
//           variant={"ghost"}
//         >
          // <Avatar className="h-8 w-8 rounded-lg">
          //   <AvatarImage src={"https://github.com/shadcn.png"} alt={"CN"} />
          //   <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          // </Avatar>
//           {/* <div className="grid flex-1 text-left text-sm leading-tight max-sm:hidden">
//             <span className="truncate font-semibold">{"Shadcn"}</span>
//             <span className="truncate text-xs">{"m@example.com"}</span>
//           </div>
//           <ChevronsUpDown className="ml-auto size-4" /> */}
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent
//         className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
//         align="end"
//         sideOffset={4}
//       >
//         <DropdownMenuLabel className="p-0 font-normal">
//           <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
//             <Avatar className="h-8 w-8 rounded-lg">
//               <AvatarImage src={"https://github.com/shadcn.png"} alt={"Shadcn"} />
//               <AvatarFallback className="rounded-lg">CN</AvatarFallback>
//             </Avatar>
//             <div className="grid flex-1 text-left text-sm leading-tight">
//               <span className="truncate font-semibold">{"Shadcn"}</span>
//               <span className="truncate text-xs">{"m@example.com"}</span>
//             </div>
//           </div>
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             <Sparkles />
//             Upgrade to Pro
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             <BadgeCheck />
//             Account
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <CreditCard />
//             Billing
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <Bell />
//             Notifications
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem onClick={() => logout()}>
//           <LogOut />
//           Log out
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }


import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  LucideUserPlus,
  Mail,
  MessageSquare,
  MonitorCog,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserCog,
  UserPlus,
  UserPlus2,
  UserPlusIcon,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export const NavUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-10 w-10 rounded-full">
          <AvatarImage src={"https://github.com/shadcn.png"} alt={"CN"} />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={"https://github.com/shadcn.png"} alt={"CN"} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{"Shadcn"}</span>
                  <span className="truncate text-xs">{"m@gmail.com"}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users />
            <span>Team</span>
          </DropdownMenuItem>
          {/* <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <LucideUserPlus/>
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub> */}
          <DropdownMenuItem asChild>
            <Link href={"/admin/dashboard"}>
              <UserCog />
              <span>Admin</span>
              <DropdownMenuShortcut>⌘+A</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={"/super-admin/dashboard"}>
              <MonitorCog />
              <span>Super Admin</span>
              <DropdownMenuShortcut>⌘+S+A</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
