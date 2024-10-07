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
    header: "Package Code",
  },
  {
    accessorKey: "nextDeliveryDate",
    header: "Delivery Date",
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
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "view",
    header: () => <div className="flex justify-end px-2"></div>,
    cell: ({ row }) => (
      <div className="flex justify-end">
        <Button asChild variant="outline_primary">
          <Link href={`/in/patients/${row.original.patientId}`}>View</Link>
        </Button>
      </div>
    ),
  },
];
