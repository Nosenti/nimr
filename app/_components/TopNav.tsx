"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";
import { Home, Truck, User, Package, Settings } from "lucide-react";
import Image from "next/image";
import { NavItem } from "./NavItem";

interface TopNavProps {
  children?: React.ReactNode;
}

export const TopNav: React.FC<TopNavProps> = () => {
  return (
    <div>
      <div className="bg-white border-b border-gray-200 w-full">
        <div className="flex justify-between items-center px-6 container mx-auto">
          <div className="flex items-center relative">
            <Image src="/assets/logo.png" alt="Logo" width={40} height={40} className="h-full py-1" />
          </div>

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




