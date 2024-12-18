"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Building,
  Calendar,
  Command,
  GalleryVerticalEnd,
  LucideBuilding2,
  LucideHousePlus,
  PieChart,
  Settings,
  Settings2,
  SquareTerminal,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "United Tractors",
      logo: GalleryVerticalEnd,
      plan: "Marketing",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  superAdmin: [
    {
      title: "Dashboard",
      url: "/super-admin/dashboard",
      icon: PieChart,
      isActive: true,
    },
    {
      title: "User Management",
      url: "#",
      icon: Users,
      items: [
        {
          title: "All Users",
          url: "/super-admin/user",
        },
        {
          title: "Roles",
          url: "/super-admin/roles",
        },
      ],
    },
    {
      title: "Company Management",
      url: "#",
      icon: LucideBuilding2,
      items: [
        {
          title: "All Company",
          url: "/super-admin/company",
        },
      ],
    },
    {
      title: "Building Management",
      url: "#",
      icon: Building,
      items: [
        {
          title: "All Building",
          url: "/super-admin/building",
        },
        {
          title: "Floors",
          url: "/super-admin/floor",
        },
      ],
    },
    {
      title: "Room Management",
      url: "#",
      icon: LucideHousePlus,
      items: [
        {
          title: "All Rooms",
          url: "/super-admin/room",
        },
        {
          title: "Room Types",
          url: "/super-admin/room-types",
        },
        {
          title: "Facilities",
          url: "/super-admin/facilities",
        },
      ],
    },
    {
      title: "Booking Management",
      url: "#",
      icon: Calendar,
      items: [
        {
          title: "All Bookings",
          url: "/super-admin/bookings",
        },
        {
          title: "Reports",
          url: "/super-admin/reports",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "/super-admin/settings/general",
        },
        {
          title: "Security",
          url: "/super-admin/settings/security",
        },
      ],
    },
  ],
  admin: [
    {
      title: "Dashboard",
      url: "/super-admin/dashboard",
      icon: PieChart,
      isActive: true,
    },
    {
      title: "User Management",
      url: "#",
      icon: Users,
      items: [
        {
          title: "All Users",
          url: "/admin/user",
        },
      ],
    },
    {
      title: "Room Management",
      url: "#",
      icon: LucideHousePlus,
      items: [
        {
          title: "All Rooms",
          url: "/admin/room",
        },
        {
          title: "Facilities",
          url: "/admin/facilities",
        },
      ],
    },
    {
      title: "Booking Management",
      url: "#",
      icon: Calendar,
      items: [
        {
          title: "All Bookings",
          url: "/admin/bookings",
        },
        {
          title: "Reports",
          url: "/admin/reports",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "/admin/settings/general",
        },
        {
          title: "Security",
          url: "/admin/settings/security",
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

export function AppSidebar({
  role,
  ...props
}: React.ComponentProps<typeof Sidebar> & { role: "Admin" | "Super Admin" }) {
  const navItems = role === "Super Admin" ? data.superAdmin : data.admin;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
