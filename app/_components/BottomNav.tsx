import {
  Breadcrumb,
  BreadcrumbList,
} from "@/app/_components/ui/breadcrumb";
import React from "react";
interface BottomNavProps {
  children?: React.ReactNode;
  breads?: React.ReactNode;
}

const BottomNav: React.FC<BottomNavProps> = ({ children, breads }) => {
  return (
    <div className="bg-transparent border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-6 container mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            {breads}
          </BreadcrumbList>
        </Breadcrumb>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BottomNav;
