import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/app/_components/ui/breadcrumb";
import Link from "next/link";
import React from "react";
interface BottomNavProps {
  children: React.ReactNode;
  breads?: React.ReactNode;
}

const BottomNav: React.FC<BottomNavProps> = ({ children, breads }) => {
  return (
    <div className="bg-transparent border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-6 container mx-auto">
        {/* Breadcrumbs */}
        <Breadcrumb>
          <BreadcrumbList>
            {breads}
            {/* use react router to add others based on path  */}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Right part: children */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BottomNav;
