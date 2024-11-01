import {
    AudioWaveform,
    BookOpen,
    Bot,
    Building,
    Calendar,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings,
    Settings2,
    SquareTerminal,
    Users,
} from "lucide-react"

export const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "PT. United Tractors Tbk.",
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
        title: "Room Management",
        url: "#",
        icon: Building,
        items: [
          {
            title: "All Rooms",
            url: "/super-admin/rooms",
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
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  }