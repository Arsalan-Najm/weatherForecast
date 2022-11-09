import React, { useContext } from 'react';
import { WeatherContext } from '../../../context/weatherContext';
import {
	BsCloud,
	BsCloudFog,
	BsSun,
	BsCloudDrizzle,
	BsCloudSnowFill,
	BsCloudSun,
	BsCloudRain,
	BsCloudLightningRain,
	BsWind,
	BsThermometerSun,
} from 'react-icons/bs';
const WEEKDAYS = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];
function WeatherIcons() {
	const { forecast } = useContext(WeatherContext);
	const day = new Date().getDay();
	const forecastDays = WEEKDAYS.slice(day, WEEKDAYS.length).concat(
		WEEKDAYS.slice(0, day)
	);
	return (
		<div className='relative flex flex-col'>
			{forecast.splice(0, 7)?.map((fore, index) => {
				return (
					<div
						key={index}
						className='border-b-2 border-main grid  grid-cols-3 items-center p-3'
					>
						<div>
							<span className='text-white text-2xl font-semibold md:text-4xl'>
								{forecastDays[index].slice(0, 3)}
							</span>
						</div>
						<div>
							{fore.weather?.map((wea, i) =>
								wea.main === 'Clouds' ? (
									<BsCloud
										color='#2a52be'
										key={i}
										className=' w-9 h-9 md:w-16 md:h-16'
									/>
								) : wea.main === 'Clear' ? (
									<BsSun
										key={i}
										className=' w-9 h-9 md:w-16 md:h-16'
										color='#fdb813'
									/>
								) : wea.main === 'Drizzle' ? (
									<BsCloudDrizzle
										key={i}
										className=' w-9 h-9 md:w-16 md:h-16'
										color='#2a52be'
									/>
								) : wea.main === 'Snow' ? (
									<BsCloudSnowFill
										key={i}
										className=' w-9 h-9 md:w-16 md:h-16'
										color='#fffafa'
									/>
								) : wea.main === 'Thunderstorm' ? (
									<BsCloudLightningRain
										key={i}
										className=' w-9 h-9 md:w-16 md:h-16'
										color='c2cda3'
									/>
								) : wea.main === 'Rain' ? (
									<BsCloudRain
										key={i}
										className=' w-9 h-9 md:w-16 md:h-16'
										color='#9099a1'
									/>
								) : wea.main === 'Atmosphere' ? (
									<BsCloudSun
										key={i}
										className=' w-9 h-9 md:w-16 md:h-16'
										color='#c0d2da'
									/>
								) : wea.main === 'Mist' ? (
									<BsCloudFog
										key={i}
										className=' w-9 h-9 md:w-16 md:h-16'
										color='#abaeb0'
									/>
								) : wea.main === 'Fog' ? (
									<BsCloudFog
										key={i}
										className=' w-9 h-9 md:w-16 md:h-16'
										color='#abaeb0'
									/>
								) : (
									<h1>Network Error</h1>
								)
							)}
						</div>
						<div className='md:grid md:grid-cols-2 md:grid-3'>
							<h1 className='text-white font-semibold md:text-lg'>
								H:{' '}
								<span className='text-secondary'>
									{fore.main?.temp_max}
									<sup>o</sup>
								</span>
							</h1>
							<h1 className='text-white font-semibold md:text-lg'>
								L:{' '}
								<span className='text-secondary'>
									{fore.main?.temp_min}
									<sup>o</sup>
								</span>
							</h1>
							<h1 className='text-white font-semibold md:text-lg'>
								<BsWind className='inline' />:{' '}
								<span className='text-secondary'>{`${fore.wind?.speed} m/s`}</span>
							</h1>
							<h1 className='text-white font-semibold md:text-lg'>
								<BsThermometerSun className='inline-block' />:{' '}
								<span className='text-secondary'>
									{`${fore.main?.humidity}%`}
								</span>
							</h1>
						</div>
					</div>
				);
			})}
		</div>
	);
}
export default WeatherIcons;
