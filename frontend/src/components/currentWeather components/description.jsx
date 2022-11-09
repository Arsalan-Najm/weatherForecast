import React, { useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';
function Description() {
	const { currentWeather } = useContext(WeatherContext);
	return (
		<div className='p-2'>
			{currentWeather.weather?.map((wea, i) => (
				<div key={i}>
					<h1 className='font-semibold text-white text-2xl'>{wea.main}</h1>
					<h1 className='font-semibold text-white/50 text-lg'>
						{wea.description}
					</h1>
				</div>
			))}
		</div>
	);
}
export default Description;
