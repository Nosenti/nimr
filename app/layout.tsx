// import Logo from '@/app/_components/Logo';

import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s - NIMR",
    default: "Welcome - NIMR",
  },
  description:
    "Delivering essential medication to NIMR patients with adherence to quality of service, care and confidentiality.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>{children}</body>
    </html>
  );
}
