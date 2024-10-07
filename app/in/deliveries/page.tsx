import React from "react";
import DeliveriesPageClient from "./_components/deliveries-page-client";
import data from "./_components/data.json";

interface Patient {
  patientId: string;
  hospitalId: string;
  patientName: string;
  phoneNumber: string;
  nextDeliveryDate: string;
  location: string;
  status: string;
  gender?: string;
  email?: string;
}

async function getData(): Promise<Patient[]> {
  return data.data;
}

const DeliveriesPage: React.FC = async () => {
  const deliveries = await getData();

  return <DeliveriesPageClient deliveries={deliveries} />;
};

export default DeliveriesPage;
