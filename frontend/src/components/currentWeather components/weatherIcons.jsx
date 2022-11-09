import React, { useContext } from 'react';
import {
	BsCloud,
	BsSun,
	BsCloudDrizzle,
	BsCloudSnowFill,
	BsCloudLightningRain,
	BsCloudRain,
	BsCloudSun,
	BsCloudFog,
} from 'react-icons/bs';
import { WeatherContext } from '../../context/weatherContext';
function WeatherIcons() {
	const { currentWeather } = useContext(WeatherContext);
	return (
		<>
			<div className='p-4 flex justify-around'>
				<h1 className='text-7xl text-secondary font-semibold md:text-8xl'>
					{currentWeather.main?.temp.toFixed()}
					<sup className='align-super text-[28px]'>o</sup>
				</h1>
				{currentWeather.weather?.map((wea, i) =>
					wea.main === 'Clouds' ? (
						<BsCloud
							color='#2a52be'
							className='w-[4.7rem] h-[4.7rem]  md:w-28 md:h-28'
							key={i}
						/>
					) : wea.main === 'Clear' ? (
						<BsSun
							className='w-[4.7rem] h-[4.7rem]  md:w-28 md:h-28'
							key={i}
							color='#fdb813'
						/>
					) : wea.main === 'Drizzle' ? (
						<BsCloudDrizzle
							className='w-[4.7rem] h-[4.7rem]  md:w-28 md:h-28'
							key={i}
							color='#2a52be'
						/>
					) : wea.main === 'Snow' ? (
						<BsCloudSnowFill
							className='w-[4.7rem] h-[4.7rem]  md:w-28 md:h-28'
							key={i}
							color='#fffafa'
						/>
					) : wea.main === 'Thunderstorm' ? (
						<BsCloudLightningRain
							className='w-[4.7rem] h-[4.7rem]  md:w-28 md:h-28'
							key={i}
							color='c2cda3'
						/>
					) : wea.main === 'Rain' ? (
						<BsCloudRain
							className='w-[4.7rem] h-[4.7rem]  md:w-28 md:h-28'
							key={i}
							color='#9099a1'
						/>
					) : wea.main === 'Atmosphere' ? (
						<BsCloudSun
							className='w-[4.7rem] h-[4.7rem]  md:w-28 md:h-28'
							key={i}
							color='#c0d2da'
						/>
					) : wea.main === 'Mist' ? (
						<BsCloudFog
							className='w-[4.7rem] h-[4.7rem]  md:w-28 md:h-28'
							key={i}
							color='#abaeb0'
						/>
					) : wea.main === 'Fog' || wea.main === 'Smoke' ? (
						<BsCloudFog
							className='w-[4.7rem] h-[4.7rem]  md:w-28 md:h-28'
							key={i}
							color='#abaeb0'
						/>
					) : (
						<h1>Network Error</h1>
					)
				)}
			</div>
		</>
	);
}
export default WeatherIcons;
