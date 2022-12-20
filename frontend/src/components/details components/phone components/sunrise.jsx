import React, { useContext } from 'react';
import { BsSunsetFill } from 'react-icons/bs';
import { WeatherContext } from '../../../context/weatherContext';

function Sunrise() {
  const { currentWeather } = useContext(WeatherContext);
  let sunset = new Date(currentWeather.sys?.sunset * 1000);
  let sunrise = new Date(currentWeather.sys?.sunrise * 1000);
  return (
    <div className='max-w-full w-full min-h-[150px] bg-black/50 rounded-2xl md:hidden'>
      <div className='p-2'>
        <BsSunsetFill className='inline text-white/50' />
        <span className='mx-2 text-white/50 text-sm'>SUNSET</span>
        <h1 className='text-white text-lg'>
          {sunset.getHours() % 12 || 12}:
          {sunset.getMinutes() < 10
            ? '0' + sunset.getMinutes()
            : sunset.getMinutes()}{' '}
          PM
        </h1>
      </div>
      <div className='p-2'>
        <BsSunsetFill className='inline text-white/50' />
        <span className='mx-2 text-white/50 text-sm'>SUNRISE</span>
        <h1 className='text-white text-lg'>
          {sunrise.getHours() % 12 || 12}:
          {sunrise.getMinutes() < 10
            ? '0' + sunrise.getMinutes()
            : sunrise.getMinutes()}{' '}
          AM
        </h1>
      </div>
    </div>
  );
}

export default Sunrise;
