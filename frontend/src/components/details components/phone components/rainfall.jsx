import React, { useContext } from 'react';
import { WeatherContext } from '../../../context/weatherContext';
import { BsDropletFill } from 'react-icons/bs';
function RainFall() {
  const { currentWeather } = useContext(WeatherContext);
  const rainFall = currentWeather.rain;
  return (
    <div className='max-w-full w-full min-h-[150px] bg-black/50 rounded-2xl md:hidden'>
      {currentWeather.rain ? (
        <div>
          <div className='p-2'>
            <BsDropletFill className='inline text-white/50' />
            <span className='mx-2 text-white/50 text-sm'>RAINFALL</span>
            <h1 className='text-md text-white'>
              <span className='text-2xl'>0"</span>
              in last 24 hours
            </h1>
          </div>
          <div className='p-2'>
            <h1 className='text-white text-sm'>
              {rainFall['1h']}" expected in next 24h.
            </h1>
          </div>
        </div>
      ) : (
        <div>
          <div className='p-2'>
            <BsDropletFill className='inline text-white/50' />
            <span className='mx-2 text-white/50 text-sm'>PRECIPITATION</span>
            <h1 className='text-md text-white'>
              <span className='text-2xl'>0" </span>
              in last 24 hours
            </h1>
          </div>
          <div className='p-2'>
            <h1 className='text-white text-sm'>
              None expected in next 7 days.
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default RainFall;
