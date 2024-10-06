"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export interface Patient {
  patientId: string;
  hospitalId: string;
  patientName: string;
  phoneNumber: string;
  nextDeliveryDate: string;
  location: string;
  status: string;
}

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "hospitalId",
    header: "Hospital ID",
  },
  {
    accessorKey: "patientName",
    header: "Patient Name",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "nextDeliveryDate",
    header: "Next Delivery Date",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      let bgcolor = "black";

      switch (status) {
        case "Due & Paid":
          bgcolor = "bg-orange-600/30 text-orange-600";
          break;
        case "Due & Unpaid":
          bgcolor = "bg-red-600/30 text-red-600";
          break;
        case "Completed":
          bgcolor = "bg-green-600/10 text-green-800";
          break;
        case "Assigned":
          bgcolor = "bg-blue-600/10 text-blue-800";
          break;
        default:
          bgcolor = "black";
      }
      return (
        <Badge className={cn(bgcolor)} variant="outline">
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "view",
    header: () => <div className="flex justify-end px-2">Actions</div>,
    cell: ({ row }) => (
      <div className="flex justify-end">
        <Button asChild variant="outline">
          <Link href={`/in/patients/${row.original.patientId}`}>View</Link>
        </Button>
      </div>
    ),
  },
];
