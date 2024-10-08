'use client';

import { RadioGroup, RadioGroupItem } from '@/app/_components/ui/radio-group';
import React, { useState, useMemo } from 'react';
import { Button } from '@/app/_components/ui/button';

const drivers = [
	{ id: '1', name: 'John Doe', location: 'Yaba', deliveries: 33 },
	{ id: '2', name: 'Jane Smith', location: 'Yaba', deliveries: 10 },
	{ id: '3', name: 'Mike Johnson', location: 'Unassigned', deliveries: 10 },
	{ id: '4', name: 'Emily Davis', location: 'Yaba', deliveries: 5 },
	{ id: '6', name: 'George Brown', location: 'Assigned', deliveries: 4 },
	{ id: '7', name: 'Robert DeNiro', location: 'Assigned', deliveries: 5 }
];

export const AssignDispatcher: React.FC = () => {
	const [filter, setFilter] = useState<string>('all');
	const [selectedDriver, setSelectedDriver] = useState<string>('');

	const counts = useMemo(() => {
		const total = drivers.length;
		const yaba = drivers.filter(
			(driver) => driver.location.toLowerCase() === 'yaba'
		).length;
		const unassigned = drivers.filter(
			(driver) => driver.location.toLowerCase() === 'unassigned'
		).length;
		const assigned = drivers.filter(
			(driver) => driver.location.toLowerCase() === 'assigned'
		).length;
		return { total, yaba, unassigned, assigned };
	}, []);

	const handleFilterClick = (selectedFilter: string) => {
		setFilter(selectedFilter);
	};

	const filteredDrivers = useMemo(() => {
		if (filter === 'yaba') {
			return drivers.filter(
				(driver) => driver.location.toLowerCase() === 'yaba'
			);
		} else if (filter === 'unassigned') {
			return drivers.filter(
				(driver) => driver.location.toLowerCase() === 'unassigned'
			);
		} else if (filter === 'assigned') {
			return drivers.filter(
				(driver) => driver.location.toLowerCase() === 'assigned'
			);
		}
		return drivers;
	}, [filter]);

	return (
		<div className='p-6 '>
		
			<div className='flex space-x-4 mb-10'>
				<Button
					variant={filter === 'all' ? 'outline_primary' : 'outline'}
					color={filter === 'all' ? 'blue' : 'gray'}
					onClick={() => handleFilterClick('all')}
					className='px-4 py-2'
				>
					All ({counts.total})
				</Button>
				<Button
					variant={filter === 'yaba' ? 'outline_primary' : 'outline'}
					color={filter === 'yaba' ? 'blue' : 'gray'}
					onClick={() => handleFilterClick('yaba')}
					className='px-4 py-2'
				>
					Yaba Riders ({counts.yaba})
				</Button>
				<Button
					variant={filter === 'unassigned' ? 'outline_primary' : 'outline'}
					color={filter === 'unassigned' ? 'blue' : 'gray'}
					onClick={() => handleFilterClick('unassigned')}
					className='px-4 py-2'
				>
					Unassigned Riders ({counts.unassigned})
				</Button>
				<Button
					variant={filter === 'assigned' ? 'outline_primary' : 'outline'}
					color={filter === 'assigned' ? 'blue' : 'gray'}
					onClick={() => handleFilterClick('assigned')}
					className='px-4 py-2'
				>
					Assigned Riders ({counts.assigned})
				</Button>
			</div>

			
			<div className='h-80 overflow-y-auto'>
				<RadioGroup
					name='driver'
					value={selectedDriver}
					onValueChange={(value) => setSelectedDriver(value)}
					className='space-y-4'
				>
					{filteredDrivers.map((driver) => (
						<div
							key={driver.id}
							className={`border rounded-md p-4 flex items-center space-x-4 ${
								selectedDriver === driver.id
									? 'border-primary bg-blue-50'
									: 'border-gray-200'
							} transition-colors duration-200`}
						>
							<RadioGroupItem
								value={driver.id}
								id={`driver-${driver.id}`}
								className='h-4 w-4 border-gray-300 focus:ring-primary'
							/>
							<div className='flex items-center px-4 justify-between w-full'>
								<div>
									<div className='text-sm text-gray-500'>
										DIspatch Rider's Name
									</div>
									<div className='font-bold text-lg'>{driver.name}</div>
								</div>
								<div>
									<div className='text-sm text-gray-500'>Delivery Areas</div>
									<div className='font-bold text-lg'>{driver.location}</div>
								</div>
								<div>
									<div className='text-sm text-gray-500'>
										Number of Deliveries
									</div>
									<div className='font-bold text-lg'>{driver.deliveries}</div>
								</div>
							</div>
						</div>
					))}
					{filteredDrivers.length === 0 && (
						<p className='text-center text-gray-500'>
							No drivers found for the selected filter.
						</p>
					)}
				</RadioGroup>
			</div>
		</div>
	);
};
