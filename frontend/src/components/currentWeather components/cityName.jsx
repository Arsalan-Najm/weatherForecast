import React, { useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';
function CityName() {
	const { currentWeather } = useContext(WeatherContext);
	return (
		<>
			<div className='p-5'>
				<h1 className='text-4xl font-semibold text-white md:text-6xl'>
					{currentWeather.name}
				</h1>
			</div>
		</>
	);
}
export default CityName;
