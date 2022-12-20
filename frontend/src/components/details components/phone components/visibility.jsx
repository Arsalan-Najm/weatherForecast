import React, { useContext } from 'react';
import { WeatherContext } from '../../../context/weatherContext';
import { BsEyeFill } from 'react-icons/bs';
function Visibility() {
  const { currentWeather } = useContext(WeatherContext);
  return (
    <div className='max-w-full w-full min-h-[150px] bg-black/50 rounded-2xl md:hidden'>
      <div className='p-2'>
        <BsEyeFill className='inline text-white/50' />
        <span className='mx-2 text-white/50 text-sm'>VISIBILITY</span>
        <h1 className='text-2xl text-white'>
          {currentWeather.main?.humidity.toString().slice(0, 1)} mi
        </h1>
      </div>
      <div className='p-2'>
        <h1 className='text-white text-sm'>
          Currently the visibility is clear
        </h1>
      </div>
    </div>
  );
}

export default Visibility;
