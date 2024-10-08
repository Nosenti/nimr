'use client';

import React, { useState, useMemo } from 'react';
import BottomNav from '@/app/_components/BottomNav';
import {
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator
} from '@/app/_components/ui/breadcrumb';
import { Card, CardContent, CardHeader } from '@/app/_components/ui/card';
import Link from 'next/link';
import { columns as tableColumns, Patient } from './../_components/columns';
import { DataTable } from './../_components/table';
import { Badge } from '@/app/_components/ui/badge';
import { useRouter } from 'next/navigation';
import FilterButton from './FilterButton';

interface DeliveriesPageClientProps {
	deliveries: Patient[];
}

const DeliveriesPageClient: React.FC<DeliveriesPageClientProps> = ({
	deliveries
}) => {
	const [filterStatus, setFilterStatus] = useState<string | null>(null);
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); 
	const router = useRouter();
	
	const statusMap: { [key: string]: string[] } = {
		paid: ['Due & Paid'],
		unpaid: ['Due & Unpaid'],
		pending: ['Assigned'],
		successful: ['Completed'],
		failed: ['Failed'] 
	};

	// Compute counts based on status
	const statusCounts = useMemo(() => {
		return deliveries.reduce(
			(acc, delivery) => {
				switch (delivery.status) {
					case 'Assigned':
						acc.pending += 1;
						break;
					case 'Completed':
						acc.successful += 1;
						break;
					case 'Due & Paid':
						acc.paid += 1;
						break;
					case 'Failed':
						acc.failed += 1;
					case 'Due & Unpaid':
						acc.unpaid += 1;
						break;
					default:
						break;
				}
				return acc;
			},
			{ pending: 0, successful: 0, failed: 0, paid: 0, unpaid: 0 }
		);
	}, [deliveries]);
	
	const filteredData = useMemo(() => {
		if (filterStatus) {
			return deliveries.filter((delivery) =>
				statusMap[filterStatus]?.includes(delivery.status)
			);
		}
		return deliveries;
	}, [deliveries, filterStatus]);

	
	const handleStatusClick = (status: string) => {
		setFilterStatus((prevStatus) => (prevStatus === status ? null : status));
	};
	
	const handleSortOrderChange = (order: 'asc' | 'desc') => {
		setSortOrder(order);
	};

	const sortedData = useMemo(() => {
		const sorted = [...filteredData].sort((a, b) => {
			const dateA = new Date(a.nextDeliveryDate).getTime();
			const dateB = new Date(b.nextDeliveryDate).getTime();
			return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
		});
		return sorted;
	}, [filteredData, sortOrder]);

	return (
		<>
			<BottomNav
				breads={
					<>
						<BreadcrumbItem>
							<BreadcrumbLink className='text-md text-primary'>
								<Link href={'/in/deliveries'}>Deliveries</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink className='text-lg'>
								View Deliveries
							</BreadcrumbLink>
						</BreadcrumbItem>
					</>
				}
			/>
			<div className='container mx-auto pt-6'>
				<div className='grid grid-cols-12 gap-10'>
				
					<div className='col-span-3 pt-16'>
						<div className='gap-y-5 flex flex-col pt-1'>
							
							<Card>
								<CardHeader className='border-b font-semibold text-lg'>
									Unassigned Deliveries
								</CardHeader>
								<CardContent>
									<FilterButton filterStatus='paid' currentFilter={filterStatus} statusCounts={statusCounts.paid} onHandleStatusClick={() => handleStatusClick('paid')}/>
									<FilterButton filterStatus='unpaid' currentFilter={filterStatus} statusCounts={statusCounts.unpaid} onHandleStatusClick={() => handleStatusClick('unpaid')}/>
								</CardContent>
							</Card>
							
							<Card>
								<CardHeader className='border-b font-semibold text-lg'>
									Assigned Deliveries
								</CardHeader>
								<CardContent>
									<FilterButton filterStatus='pending' currentFilter={filterStatus} statusCounts={statusCounts.pending} onHandleStatusClick={() => handleStatusClick('pending')}/>
									<FilterButton filterStatus='successful' currentFilter={filterStatus} statusCounts={statusCounts.successful} onHandleStatusClick={() => handleStatusClick('successful')}/>
									<FilterButton filterStatus='failed' currentFilter={filterStatus} statusCounts={statusCounts.failed} onHandleStatusClick={() => handleStatusClick('failed')}/>
								</CardContent>
							</Card>
						</div>
					</div>
					
					<div className='col-span-9'>
						
								<DataTable
									columns={tableColumns}
									data={sortedData}
									sortOrder={sortOrder}
									setSortOrder={handleSortOrderChange}
								/>
							
					</div>
				</div>
			</div>
		</>
	);
};

export default DeliveriesPageClient;
