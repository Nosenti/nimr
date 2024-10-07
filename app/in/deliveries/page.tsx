import BottomNav from "@/app/_components/BottomNav";
import { BreadcrumbItem, BreadcrumbLink } from "@/app/_components/ui/breadcrumb";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { columns, Patient } from "./_components/columns";
import data from "./_components/data.json";
import { DataTable } from "./_components/table";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

async function getData(): Promise<Patient[]> {
  return data.data;
}
const DeliveriesPage: React.FC = async () => {
  const data = await getData();
  return (
    <>
      {/*  */}
      <BottomNav
        breads={
          <BreadcrumbItem>
            <BreadcrumbLink className="text-lg">
              <Link href={"/in/deliveries"}>Deliveries</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        }
      >
        <div className="flex w-full justify-between">
          <div></div>
        </div>
      </BottomNav>
      {/*  */}
      <div className="container mx-auto pt-6">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3 pt-16">
            <div className="gap-y-5 flex flex-col pt-1">
              <Card>
                <CardHeader className="border-b font-semibold">
                  Unassigned Deliveries
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between h-14 items-center">
                    <span className="text-muted-foreground text-sm">Paid</span>
                    <Badge
                      variant={"destructive"}
                      className="rounded-full ml-auto"
                    >
                      12
                    </Badge>
                  </div>
                  <div className="flex justify-between h-14 items-center">
                    <span className="text-muted-foreground text-sm">
                      Unpaid
                    </span>
                    <Badge
                      variant={"destructive"}
                      className="rounded-full ml-auto"
                    >
                      8
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="border-b font-semibold">
                  Assigned Deliveries
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between h-14 items-center">
                    <span className="text-muted-foreground text-sm">
                      Pending
                    </span>
                  </div>
                  <div className="flex justify-between h-14 items-center">
                    <span className="text-muted-foreground text-sm">
                      Successfull
                    </span>
                  </div>
                  <div className="flex justify-between h-14 items-center">
                    <span className="text-muted-foreground text-sm">
                      Failed
                    </span>
                    <Badge
                      variant={"destructive"}
                      className="rounded-full ml-auto"
                    >
                      12
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="col-span-9">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveriesPage;
