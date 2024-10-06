"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import { Patient } from "../_components/columns";
import data from "../_components/data.json";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PatientPage = (props: any) => {
  const id = props.params.id;
  const [patient, setPatient] = useState<Patient | null>(null);
  const [activeTab, setActiveTab] = useState("patient");
  useEffect(() => {
    if (id) {
      const foundPatient = data.data.find(
        (patient: Patient) => patient.patientId === id
      );
      setPatient(foundPatient!);
    }
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BottomNav
        breads={
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-lg">View Patient</BreadcrumbLink>
            </BreadcrumbItem>
          </>
        }
      >
        <div>
          <div className="flex gap-x-14 flex-row items-center flex-nowrap">
            <div className="text-xs">
              Patient next delivery data is
              <p className="font-semibold">14th Nov 202, in 2 days</p>
            </div>
            <Button className="" size={"lg"} asChild>
              <Link href={`/in/patients/${id}/assign`}>
                Assign Package to patient
              </Link>
            </Button>
          </div>
        </div>
      </BottomNav>
      <div className="container mx-auto py-4">
        <div className="grid gap-10 grid-cols-12">
          <div className="col-span-4">
            {/* Left Vertical Navigation */}
            <Card>
              <CardContent>
                <div className="py-4">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="px-4 py-3 my-1">
                        <Link href="">Patient</Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="px-4 py-3 my-1 bg-primary/5 font-semibold text-primary border-r-2 border-primary">
                        <Link href="">Rider's Profile</Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="px-4 py-3 my-1">
                        <Link href="">Delivery History</Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </CardContent>
            </Card>
          </div>
          {/*  */}
          <div className="col-span-8">
            <Card>
              <CardContent className="px-0">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="flex items-center space-x-4 w-full border-b px-6">
                    {/* */}
                    {/* */}
                    <div className="flex items-center gap-x-4 flex-1">
                      <p className="text">Payment Status</p>
                      <Badge className="rounded bg-green-100 shadow-none text-green-950">
                        {patient.status}
                      </Badge>
                    </div>
                    {/* */}
                    {/* */}
                    <TabsTrigger
                      value="patient"
                      className={cn({
                        "py-2 h-16": true,
                        "text-primary font-semibold border-b-2 border-primary":
                          activeTab === "patient",
                      })}
                    >
                      Patient Information
                    </TabsTrigger>
                    <TabsTrigger
                      value="delivery"
                      className={cn({
                        "py-2 h-16": true,
                        "text-primary font-semibold border-b-2 border-primary":
                          activeTab === "delivery",
                      })}
                    >
                      Delivery Information
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent className="px-6 py-4" value="patient">
                    <div>
                      {/* Patient Information Content */}
                      <h2 className="text-xl font-bold mb-4">
                        Patient Information
                      </h2>
                      {/* Add patient information components here */}
                    </div>
                  </TabsContent>
                  <TabsContent className="px-6 py-4" value="delivery">
                    <div>
                      {/* Delivery Information Content */}
                      <h2 className="text-xl font-bold mb-4">
                        Delivery Information
                      </h2>
                      {/* Add delivery information components here */}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Right Main Content */}
      </div>
    </>
  );
};

export default PatientPage;
