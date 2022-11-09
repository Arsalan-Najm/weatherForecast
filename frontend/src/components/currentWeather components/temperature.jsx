import React, { useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';

function Temprature() {
	const { currentWeather } = useContext(WeatherContext);
	return (
		<div className='flex justify-center'>
			<h1 className='text-white text-lg font-semibold'>
				H:
				<span className='text-secondary'>
					{currentWeather.main?.temp_max}
					<sup>o</sup>
				</span>
			</h1>
			&nbsp;&nbsp;
			<h1 className='text-white text-lg font-semibold'>
				L:
				<span className='text-secondary'>
					{currentWeather.main?.temp_min}
					<sup>o</sup>
				</span>
			</h1>
		</div>
	);
}
export default Temprature;
