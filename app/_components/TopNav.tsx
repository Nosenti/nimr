"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";
import { Home, Truck, User, Package, Settings } from "lucide-react";
import Link from "next/link";

interface TopNavProps {
  children?: React.ReactNode;
}

export const TopNav: React.FC<TopNavProps> = () => {
  return (
    <div>
      {/* Top part: logo, navigation, and user account */}
      <div className="bg-white border-b border-gray-200 w-full">
        <div className="flex justify-between items-center px-6 container mx-auto">
          {/* Logo */}
          <div className="flex items-center relative">
            <Image src="/assets/logo.png" alt="Logo" width={40} height={40} className="h-full py-1" />
          </div>

          {/* Navigation items */}
          <div className="flex space-x-12">
            <NavItem
              icon={<Home size={16} />}
              href="/in/overview"
              label="Overview"
            />
            <NavItem
              icon={<Truck size={16} />}
              href="/in/deliveries"
              label="Deliveries"
            />
            <NavItem
              icon={<User size={16} />}
              href="/in/patients"
              label="Patients"
            />
            <NavItem
              icon={<Package size={16} />}
              href="/in/dispatch"
              label="Dispatch Riders"
            />
            <NavItem
              icon={<Settings size={16} />}
              href="/in/admin"
              label="Admin"
            />
          </div>

          {/* User account section */}
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="/assets/avatar.png" alt="User Avatar" />
              <AvatarFallback>EM</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Emmanuel Adigwe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

import { cn } from "@/app/_lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
const NavItem: React.FC<NavItemProps> = ({ icon, label, href }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={cn("flex items-center space-x-1 h-14", {
        "text-blue-600 font-bold border-b-4 border-blue-600": isActive,
        "text-muted-foreground opacity-80": !isActive,
      })}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};
