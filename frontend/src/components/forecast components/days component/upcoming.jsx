import React from 'react';
import WeatherIcons from './weatherIcon';

function Upcoming() {
	return (
		<div className='relative flex items-center p-4'>
			<div className='w-full min-h-[500px] bg-black/50 p-2 rounded-3xl'>
				<div className='p-2 border-b-2 border-main'>
					<h3 className='text-white/30 font-semibold text-sm md:text-lg'>
						7-DAYS FORECAST
					</h3>
				</div>
				<WeatherIcons />
			</div>
		</div>
	);
}
export default Upcoming;
