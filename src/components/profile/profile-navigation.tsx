"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Star, Ticket, Users, HelpCircle, Settings } from 'lucide-react';

const sidebarItems = [
  { icon: User, label: 'Account', href: '/profile/account' },
  { icon: Star, label: 'Your Reviews', href: '/profile/reviews' },
  { icon: Ticket, label: 'Your Orders', href: '/profile/yourorder' },
  { icon: Users, label: 'Save Meeting Room Data', href: '/profile/meeting-rooms' },
  { icon: HelpCircle, label: 'Help Center', href: '/profile/help' },
  { icon: Settings, label: 'Settings', href: '/profile/settings' },
];

export default function ProfileNavigation() {
  const pathname = usePathname();

  return (
    <div className="w-full md:w-72 hidden md:block">
      {/* Profile Card */}
      <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg p-6 mb-4 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-2xl font-semibold">MF</span>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Muhammad Fauzi Fadillah</h2>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white rounded-lg shadow-sm">
        {sidebarItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 hover:bg-gray-50 transition-colors ${
                isActive ? 'text-teal-600' : 'text-gray-700'
              }`}
            >
              <IconComponent size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}