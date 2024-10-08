import React from 'react';
import { Badge } from '@/app/_components/ui/badge';

interface FilterButtonProps {
	filterStatus: string; 
	currentFilter: string | null; 
	statusCounts: number; 
	onHandleStatusClick: (status: string) => void; 
}

const FilterButton: React.FC<FilterButtonProps> = ({
	filterStatus,
	currentFilter,
	statusCounts,
	onHandleStatusClick
}) => {
	return (
		<div
			className={`flex justify-between h-14 items-center cursor-pointer p-6  ${
				currentFilter === filterStatus ? 'bg-primary/20 border-r-2 border-primary' : ''
			}`}
			onClick={() => onHandleStatusClick(filterStatus)} 
		>
			<span className='text-muted-foreground text-sm'>{filterStatus}</span>
			{statusCounts > 0 && (
				<Badge variant={'destructive'} className='rounded-full ml-auto'>
					{statusCounts}
				</Badge>
			)}
		</div>
	);
};

export default FilterButton;
