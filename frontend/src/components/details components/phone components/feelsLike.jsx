import React, { useContext } from 'react';
import { WeatherContext } from '../../../context/weatherContext';
import { BsThermometerHalf } from 'react-icons/bs';
function Feelslike() {
  const { currentWeather, fahrenheit } = useContext(WeatherContext);
  return (
    <div className='max-w-full w-full min-h-[150px] bg-black/50 rounded-2xl md:hidden'>
      <div className='p-2'>
        <BsThermometerHalf className='inline text-white/50' />
        <span className='mx-2 text-white/50 text-sm'>FEELS LIKE</span>
        <h1 className='text-2xl text-white'>
          {fahrenheit ? (
            <div>
              {(currentWeather.main?.feels_like.toFixed() * 9) / 5 + 32}
              <sup>o</sup>F
            </div>
          ) : (
            <div>
              {currentWeather.main?.feels_like}
              <sup>o</sup>C
            </div>
          )}
        </h1>
      </div>
      <div className='p-2'>
        <h1 className='text-white text-sm'>
          Similar to the actual temprature.
        </h1>
      </div>
    </div>
  );
}

export default Feelslike;
