import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { DataTable } from "./_components/table";
import { columns, Patient } from "./_components/columns";
import data from "./_components/data.json";
import { BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import Link from "next/link";

async function getData(): Promise<Patient[]> {
  return data.data;
}
const PatientsPage: React.FC = async () => {
  const data = await getData();
  return (
    <>
      {/*  */}
      <BottomNav
        breads={
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-lg">
              <Link href={"/in/patients"}>Patients</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        }
      >
        <div className="flex w-full justify-between">
          <div>
            <Button size={"lg"} variant={"primary"}>
              <Plus className="mr-2" size={16}></Plus>
              <span>Add Patient</span>
            </Button>
          </div>
        </div>
      </BottomNav>
      {/*  */}
      <div className="container mx-auto pt-6">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default PatientsPage;
