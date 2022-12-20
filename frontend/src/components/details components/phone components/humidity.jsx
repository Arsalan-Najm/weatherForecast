import React, { useContext } from 'react';
import { WeatherContext } from '../../../context/weatherContext';
import { BsMoisture } from 'react-icons/bs';
function Humidity() {
  const { currentWeather } = useContext(WeatherContext);
  return (
    <div className='max-w-full w-full min-h-[150px] bg-black/50 rounded-2xl md:hidden'>
      <div className='p-2'>
        <BsMoisture className='inline text-white/50' />
        <span className='mx-2 text-white/50 text-sm'>HUMIDITY</span>
        <h1 className='text-2xl text-white'>
          {currentWeather.main?.humidity}%
        </h1>
      </div>
      <div className='p-2'>
        <h1 className='text-white text-sm'>
          The dew point is{' '}
          <span className='font-semi'>
            {currentWeather.main?.temp.toFixed()}
            <sup>o </sup>
          </span>
          right now.
        </h1>
      </div>
    </div>
  );
}

export default Humidity;
