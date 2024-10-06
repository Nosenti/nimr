import img from "@/assets/scan/QR_code_for_mobile_English_Wikipedia.svg.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

interface ScanPackageProps {
  patientName: string;
}

function Scanning({
  setIsScanning,
}: {
  setIsScanning: (val: boolean) => void;
}) {
  return (
    <div className="gap-y-6 flex flex-col justify-center items-center">
      <div className="py-6">
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
      </div>
      <div>Scanning package ...</div>
      <Button onClick={() => setIsScanning(false)} variant={"secondary"}>
        Stop Scanning
      </Button>
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
        {/*  */}
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
              variant={"primary"}
              className="w-full"
              size={"lg"}
            >
              Scan Package
            </Button>
          </div>
        </div>
        {/*  */}
        <Separator
          orientation="vertical"
          className="flex items-center justify-center"
        >
          <span className="bg-white p-1">Or</span>
        </Separator>
        {/*  */}
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
        {/*  */}
      </div>
    </div>
  );
}

export const ScanPackage: React.FC<ScanPackageProps> = ({ patientName }) => {
  const [isScanning, setIsScanning] = React.useState(false);

  return (
    <div>
      {/*  */}
      <div className="px-1">
        <h2 className="my-2 py-2 text-center">
          Scan package to assign it to <b>{patientName}</b>.
        </h2>
      </div>
      {/*  */}
      {isScanning ? (
        <Scanning setIsScanning={setIsScanning} />
      ) : (
        <NotScanning setIsScanning={setIsScanning} />
      )}
      {/*  */}
    </div>
  );
};
