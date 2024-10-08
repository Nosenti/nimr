'use client';
import { Badge } from '@/app/_components/ui/badge';
import { Card, CardContent } from '@/app/_components/ui/card';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList
} from '@radix-ui/react-navigation-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useEffect, useState } from 'react';
import { Patient } from '../_components/columns';
import data from '../_components/data.json';
import BottomNav from '@/app/_components/BottomNav';
import { Button } from '@/app/_components/ui/button';
import {
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator
} from '@/app/_components/ui/breadcrumb';
import BigInput from '@/app/_components/ui/patient-input';
import { cn } from '@/app/_lib/utils';
import Link from 'next/link';
import Spinner from '@/app/_components/ui/Spinner';

const PatientPage = (props: any) => {
	const id = props.params.id;
	const [patient, setPatient] = useState<Patient | null>(null);
	const [activeTab, setActiveTab] = useState('patient');
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
					</>
				}
			>
				<div>
					<div className='flex gap-x-14 flex-row items-center flex-nowrap'>
						<div className='text-xs'>
							Patient next delivery data is
							<p className='font-semibold'>14th Nov 202, in 2 days</p>
						</div>
						<Button className='' size={'lg'} asChild>
							<Link href={`/in/patients/${id}/assign`}>
								Assign Package to patient
							</Link>
						</Button>
					</div>
				</div>
			</BottomNav>
			<div className='container mx-auto py-4'>
				<div className='grid gap-10 grid-cols-12'>
					<div className='col-span-4'>
						
						<Card>
							<CardContent>
								<div className='py-4'>
									<NavigationMenu>
										<NavigationMenuList>
											<NavigationMenuItem className='px-4 py-3 my-1'>
												<Link href=''>Patient</Link>
											</NavigationMenuItem>
											<NavigationMenuItem className='px-4 py-3 my-1 bg-primary/5 font-semibold text-primary border-r-2 border-primary'>
												<Link href=''>Rider's Profile</Link>
											</NavigationMenuItem>
											<NavigationMenuItem className='px-4 py-3 my-1'>
												<Link href=''>Delivery History</Link>
											</NavigationMenuItem>
										</NavigationMenuList>
									</NavigationMenu>
								</div>
							</CardContent>
						</Card>
					</div>
				
					<div className='col-span-8'>
						<Card>
							<CardContent className='px-0'>
								<Tabs value={activeTab} onValueChange={setActiveTab}>
									<TabsList className='flex items-center space-x-4 w-full border-b px-6'>
									
										<div className='flex items-center gap-x-4 flex-1'>
											<p className='text'>Payment Status</p>
											<Badge className='rounded bg-green-100 shadow-none text-green-950'>
												{patient.status}
											</Badge>
										</div>
									
										<TabsTrigger
											value='patient'
											className={cn({
												'py-2 h-16': true,
												'text-primary font-semibold border-b-2 border-primary':
													activeTab === 'patient'
											})}
										>
											Patient Information
										</TabsTrigger>
										<TabsTrigger
											value='delivery'
											className={cn({
												'py-2 h-16': true,
												'text-primary font-semibold border-b-2 border-primary':
													activeTab === 'delivery'
											})}
										>
											Delivery Information
										</TabsTrigger>
									</TabsList>

									<TabsContent
										className='px-6 py-4 grid-cols-12'
										value='patient'
									>
										<div className='grid grid-cols-12 gap-4'>
											
											<div className='col-span-6 flex flex-col justify-start'>
												<div className='space-y-4'>
													<h2 className='text-xl font-bold mb-4'>
														Patient Information
													</h2>
													<p className='text-sm text-accent-foreground/50'>
														Personal Information about Patient
													</p>
													<Button
														variant='outline'
														className='w-[70%] text-primary border-primary'
													>
														Edit Patient's Information
													</Button>
													
												</div>
											</div>
										
											<div className='col-span-6'>
												<div className='space-y-4'>
													<BigInput
														label='Hospital ID'
														id='hospital-id'
														name='hospital-id'
														placeholder='1AFHFH095'
													/>
													<div className='flex gap-4'>
														<BigInput
															label='First Name'
															id='first-name'
															name='first-name'
															placeholder='John'
														/>
														<BigInput
															label='Last Name'
															id='last-name'
															name='last-name'
															placeholder='Doe'
														/>
													</div>
													<div className='flex gap-4'>
														<BigInput
															label='Gender'
															id='gender'
															name='gender'
															placeholder='Gender'
														/>
														<BigInput
															label='Phone Number'
															id='phone-number'
															name='phone-number'
															placeholder='0788888888'
														/>
													</div>
													<BigInput
														label='Email Address'
														id='email-address'
														name='email-address'
														placeholder='johndoe@gmail.com'
													/>
												</div>
											</div>
										</div>
									</TabsContent>
									<TabsContent className='px-6 py-4' value='delivery'>
										<div className='grid grid-cols-12 gap-4'>
											
											<div className='col-span-6 flex flex-col justify-start'>
												<div className='space-y-4'>
													<h2 className='text-xl font-bold mb-4'>
														Delivery Information
													</h2>
													<p className='text-sm text-accent-foreground/50'>
														Information about Delivery Status
													</p>
													<Button
														variant='outline'
														className='w-[70%] text-primary border-primary'
													>
														Edit Delivery Information
													</Button>
													
												</div>
											</div>
											
											<div className='col-span-6'>
												<div className='space-y-4'>
													<BigInput
														label='Next Delivery Date'
														id='next-delivery-date'
														name='delivery-id'
														placeholder='1st January 2020'
													/>
													<BigInput
														label='Delivery Area'
														id='delivery-area'
														name='delivery-area'
														placeholder='Yaba, Lagos'
													/>
													<BigInput
														label='Delivery Address'
														id='delivery-address'
														name='delivery-address'
														placeholder='19th street, Lagos'
													/>
													<div className='flex gap-4 w-[50%]'>
														<BigInput
															label='Payment Status'
															id='payment-status'
															name='payment-status'
															placeholder='Paid'
														/>
													</div>
													
												</div>
											</div>
										</div>
									</TabsContent>
								</Tabs>
								<div className='flex items-center w-full border-t p-6 justify-end'>
											<Button>Save Changes</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
				
			</div>
		</>
	);
};

export default PatientPage;
