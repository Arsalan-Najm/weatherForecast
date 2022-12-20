import React, { useContext } from 'react';
import { WeatherContext } from '../../../context/weatherContext';
import { BsWind, BsCompass } from 'react-icons/bs';
function Wind() {
  const { currentWeather } = useContext(WeatherContext);
  return (
    <div className='relative max-w-full w-full min-h-[150px] bg-black/50 rounded-2xl md:hidden'>
      <div className='p-2'>
        <BsWind className='text-white/50 inline' />
        <span className='mx-2 text-white/50 text-sm'>WIND</span>
      </div>
      <div className='p-2'>
        <BsCompass className='m-auto text-secondary' size={60} />
      </div>
      <div className='mx-2'>
        <span className='text-white/50 text-sm'>Speed: </span>
        <span className='text-[#2a52be] font-semi'>
          {currentWeather.wind?.speed} mph
        </span>
      </div>
    </div>
  );
}

export default Wind;
