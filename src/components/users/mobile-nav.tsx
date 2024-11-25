"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Ticket, MessageSquare, User } from 'lucide-react';

const mobileNavItems = [
  {
    icon: Home,
    label: 'Home',
    href: '/home',
  },
  {
    icon: Ticket,
    label: 'Orders',
    href: '/profile/yourorder',
  },
  {
    icon: MessageSquare,
    label: 'Messages',
    href: '/messages',
  },
  {
    icon: User,
    label: 'Profile',
    href: '/profile/account',
  },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
      <nav className="flex justify-around items-center h-16">
        {mobileNavItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 h-full"
            >
              <IconComponent
                size={20}
                className={`mb-1 ${
                  isActive ? 'text-teal-600' : 'text-gray-500'
                }`}
              />
              <span
                className={`text-xs ${
                  isActive ? 'text-teal-600 font-medium' : 'text-gray-500'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
      {/* Add safe area padding for mobile devices */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}