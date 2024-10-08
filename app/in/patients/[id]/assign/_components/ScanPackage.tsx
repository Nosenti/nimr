import img from "@/public/assets/scan/QR_code_for_mobile_English_Wikipedia.svg.png";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Separator } from "@/app/_components/ui/separator";
import Image from "next/image";
import React, { useEffect } from "react";
import { toast } from 'react-hot-toast';

interface ScanPackageProps {
  patientName: string;
  onScanningChange: string;
}

function Scanning({
  setIsScanning,
  scanStatus,
}: {
  setIsScanning: (val: boolean) => void;
  scanStatus: string;
  }) {
  
  return (
    <div className="gap-y-6 flex flex-col justify-center items-center">
      <div className="py-6">
        {scanStatus === "success" ? (
          
          <div className="text-center flex flex-col">
            <p className="mb-2">Package code</p>
            <div className="border p-4 bg-slate-400/20 w-[100%]">
              <p> <strong>ABC123XYZ</strong></p>
            </div>
            <div className="flex justify-end">
              <p className="text-red-700 font-bold mt-2">x Remove</p>
            </div>
            
          </div>
        ) : (
          // Scanning animation
          <div className="relative w-56 mx-auto h-56">
            <Image
              className="mx-auto my-0 object-contain object-bottom h-full w-full"
              placeholder="blur"
              blurDataURL={img.blurDataURL}
              src={img.src}
              alt="Scan Package"
              objectFit="contain"
              width={200}
              height={200}
            />
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500 animate-move-line"></div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-green-500"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-green-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-green-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-green-500"></div>
          </div>
        )}
      </div>
    </div>
  );
}

function NotScanning({
  setIsScanning,
}: {
  setIsScanning: (val: boolean) => void;
}) {
  return (
    <div>
      <div className="grid grid-cols-12 gap-10 items-center">
       
        <div className="col-span-5 p-4">
          <div>
            <Image
              className="mx-auto my-4"
              placeholder="blur"
              blurDataURL={img.blurDataURL}
              src={img.src}
              alt="Scan Package"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Button
              onClick={() => setIsScanning(true)}
              className="w-full"
              size={"lg"}
            >
              Scan Package
            </Button>
          </div>
        </div>
      
        <Separator
          orientation="vertical"
          className="flex items-center justify-center"
        >
          <span className="bg-white p-1">Or</span>
        </Separator>
      
        <div className="col-span-5 p-4">
          <div className="flex gap-y-3 flex-col">
            <div>Trouble scanning? Enter the package ID manually.</div>
            <div>
              <Input placeholder="Enter code" size={16}></Input>
            </div>
            <div>
              <Button variant={"outline"} className="w-full" size={"lg"}>
                Submit Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ScanPackage: React.FC<ScanPackageProps> = ({ patientName, onScanStatusChange }) => {
  const [isScanning, setIsScanning] = React.useState(false);
  const [scanStatus, setScanStatus] = React.useState("idle");

  useEffect(() => {
    let scanTimer: NodeJS.Timeout;
    if (isScanning) {
      setScanStatus("scanning");
      onScanStatusChange("scanning"); 
      toast.loading('Scanning package...', { id: 'scanStatus' });
      scanTimer = setTimeout(() => {
        setScanStatus("success");
        onScanStatusChange("success");
        toast.dismiss('scanStatus');
        toast.success('Successfully scanned.');
      }, 2000); 
    } else {
      setScanStatus("idle");
      onScanStatusChange("idle"); 
      toast.dismiss('scanStatus');
    }
    return () => {
      clearTimeout(scanTimer);
      toast.dismiss('scanStatus');
    };
  }, [isScanning]);

  useEffect(() => {
    if (scanStatus === 'success') {
      toast.dismiss('scanStatus');
      toast.success('Successfully scanned.');
    }
  }, [scanStatus]);

  return (
    <div>
      <div className="px-1">
        <h2 className="my-2 py-2 text-center">
          Scan package to assign it to <b>{patientName}</b>.
        </h2>
      </div>

      {isScanning ? (
        <Scanning setIsScanning={setIsScanning} scanStatus={scanStatus} />
      ) : (
        <NotScanning setIsScanning={setIsScanning} />
      )}
    </div>
  );
};
