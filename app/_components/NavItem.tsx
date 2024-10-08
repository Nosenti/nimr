import { cn } from "@/app/_lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export const NavItem: React.FC<NavItemProps> = ({ icon, label, href }) => {
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