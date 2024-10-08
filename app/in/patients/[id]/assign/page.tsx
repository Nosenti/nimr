"use client";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { Label } from "@/app/_components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/_components/ui/radio-group";
import { cn } from "@/app/_lib/utils";
import { LucideCheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";
import { Patient } from "../../_components/columns";
import data from "../../_components/data.json";
import { AssignDispatcher } from "./_components/AssignDispatcher";
import { DrugCycle } from "./_components/DrugCycle";
import { ScanPackage } from "./_components/ScanPackage";
import Spinner from "@/app/_components/ui/Spinner";
import BottomNav from '@/app/_components/BottomNav';
import {
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator
} from '@/app/_components/ui/breadcrumb';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const keys: Partial<Record<keyof Patient, string>> = {
  hospitalId: "Hospital ID",
  patientName: "Patient Name",
  phoneNumber: "Phone Number",
  nextDeliveryDate: "Next Delivery Date",
  location: "Location",
};

const Step = ({ number, children }: { number: number; children: any }) => {
  const { handleStep } = useWizard();
  handleStep(() => {});
  return <div className="px-8 py-8">{children}</div>;
};

const CheckBot = () => {
  return (
    <LucideCheckCircle2 className="rounded-full text-white bg-green-600" />
  );
};
const Header = () => {
  const {
    activeStep

  } = useWizard();
  const finishedStepClass = "text-green-600 font-semibold";
  const activeStepClass = "text-blue-600 font-semibold";
  return (
    <div className="border-b py-6 px-10">
      <RadioGroup
        className="flex justify-between gap-x-10  text-lg w-full"
        defaultValue={1 as any}
      >
        {/* step 1 */}
        <div className="flex items-center space-x-2">
          {activeStep > 0 ? (
            <CheckBot />
          ) : (
            <RadioGroupItem
              checked={activeStep == 0}
              value={0 as any}
              id="r1"
            />
          )}
          <Label
            className={cn("text-lg", {
              [finishedStepClass]: activeStep >= 0,
              [activeStepClass]: activeStep == 0,
            })}
            htmlFor="r1"
          >
            Set Drug Cycle
          </Label>
        </div>
        {/* step 2 */}
        <div className="flex items-center space-x-2">
          {activeStep > 1 ? (
            <CheckBot />
          ) : (
            <RadioGroupItem
              checked={activeStep == 1}
              value={1 as any}
              id="r1"
            />
          )}
          <Label
            className={cn("text-lg", {
              [finishedStepClass]: activeStep >= 1,
              [activeStepClass]: activeStep == 1,
            })}
            htmlFor="r1"
          >
            Assign Dispatcher Rider
          </Label>
        </div>
        {/* step 3 */}
        <div className="flex items-center space-x-2">
          {activeStep > 2 ? (
            <CheckBot />
          ) : (
            <RadioGroupItem
              checked={activeStep == 2}
              value={2 as any}
              id="r1"
            />
          )}
          <Label
            className={cn("text-lg", {
              [finishedStepClass]: activeStep >= 2,
              [activeStepClass]: activeStep == 2,
            })}
            htmlFor="r1"
          >
            Scan Package
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

const Footer = ({ scanStatus, onAssignPackage }: { scanStatus: string; onAssignPackage: () => void }) => {
  const {
    nextStep,
    previousStep,
    activeStep,
    isLoading,
    isFirstStep,
  } = useWizard();

  const isAssignDisabled = activeStep === 2 && scanStatus !== "success";

  const handleNextClick = () => {
    if (activeStep === 2) {
      onAssignPackage(); 
    } else {
      nextStep();
    }
  };

  return (
    <div className="border-t pt-6 px-8 flex justify-between gap-x-10">
      <Button
        disabled={isLoading || isFirstStep}
        onClick={() => previousStep()}
        size={"lg"}
        variant={"outline_primary"}
      >
        Back
      </Button>
      <Button
        onClick={handleNextClick}
        disabled={isLoading || isAssignDisabled}
        size={"lg"}
      >
        {activeStep === 2 ? "Assign Package" : "Next"}
      </Button>
    </div>
  );
};

/**
 *
 * @param props
 * @returns
 */
const PatientPage = (props: any) => {
  const id = props.params.id;
  const [patient, setPatient] = useState<Patient | null>(null);
  const [activeTab, setActiveTab] = useState("patient");
  const [scanStatus, setScanStatus] = useState("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  
  useEffect(() => {
    if (id) {
      const foundPatient = data.data.find(
        (patient: Patient) => patient.patientId === id
      );
      setPatient(foundPatient!);
    }
  }, [id]);

  if (!patient) {
    return <div><Spinner/></div>;
  }
  const onAssignPackage = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    
    setIsModalOpen(false);
    toast.success(`Package has been successfully assigned to ${patient!.patientName}`, {
    duration: 4000,
    position: "top-center",
    style: {
      background: "green",
      color: "white",
      fontWeight: "bold",
    },
    icon: <LucideCheckCircle2 className="text-white" />,
  });
    
    router.push("/in/deliveries");
    
  };

  return (
    <>
      <BottomNav
				breads={
					<>
						<BreadcrumbItem>
							<BreadcrumbLink className='text-md text-primary'>
								Patients
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink className='text-lg'>View Patient</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink className='text-xl'>Assign Package to Patient</BreadcrumbLink>
						</BreadcrumbItem>
					</>
				}
			></BottomNav>
      <div className="container mx-auto py-4">
        <div className="grid gap-10 grid-cols-12">
          <div className="col-span-4">
            
            <Card>
              <CardHeader className="border-b font-semibold text-lg">
                Patient Information
              </CardHeader>
              <CardContent>
                <div className="py-4">
                  <div>
                    {Object.keys(keys).map((key) => (
                      <div key={key} className="flex justify-between py-2">
                        <p className="text-gray-500">
                          {keys[key as keyof Patient]}
                        </p>
                        <p className="font-semibold">
                          {patient[key as keyof Patient]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
    
          <div className="col-span-8">
            <Card>
              <CardContent className="px-0">
                <Wizard header={<Header />} footer={<Footer scanStatus={scanStatus} onAssignPackage={onAssignPackage} />}>
                  <Step number={1}>
                    <DrugCycle
                      patientName={patient!.patientName}
                      onDrugCycleChange={() => {}}
                    />
                  </Step>
                  <Step number={2}>
                    <AssignDispatcher />
                  </Step>
                  <Step number={3}>
                    <ScanPackage
                      patientName={patient!.patientName}
                      onScanStatusChange={setScanStatus}
                    />
                  </Step>
                </Wizard>
          
              </CardContent>
            </Card>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <Card className="max-w-md w-full m-4">
              <CardHeader className="border-b">
                <h3 className="text-lg font-medium text-gray-900">
                  Assign Package <strong>3455666</strong>
                </h3>
              </CardHeader>
              <CardContent className="py-6">
                <p className="mt-2 text-sm text-gray-600">
                  Are you sure you want to assign package <strong>3455666</strong> to <strong>{ patient!.patientName}</strong>?
                </p>
              </CardContent>
              <div className="px-6 py-6 flex space-x-3 border-t">
                <Button onClick={() => setIsModalOpen(false)} variant="outline_primary" size="lg">
                  No, Go Back
                </Button>
                <Button onClick={handleConfirm} size='lg'>Yes, Assign Package</Button>
              </div>
            </Card>
          </div>
        )}
        
      </div>
    </>
  );
};

export default PatientPage;
