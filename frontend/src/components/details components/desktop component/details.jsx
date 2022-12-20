import React, { useContext } from 'react';
import { WeatherContext } from '../../../context/weatherContext';
import {
  BsThermometerHalf,
  BsWind,
  BsMoisture,
  BsDropletFill,
  BsEyeFill,
  BsArrowDownUp,
  BsArrowDown,
} from 'react-icons/bs';
function Details() {
  const { currentWeather, fahrenheit } = useContext(WeatherContext);
  const rainFall = currentWeather.rain;
  let pressure = currentWeather.main?.pressure;
  pressure = pressure / 29.921;
  return (
    <div className='relative grid grid-cols-2 p-2 gap-4'>
      <div className='flex items-center justify-between p-4 border-b-2  border-main '>
        <div>
          <h1 className='text-lg'>
            <BsThermometerHalf className='inline text-secondary' />
            <span className='text-white mx-2'>High/Low</span>
          </h1>
        </div>
        <div>
          <h1 className='text-white text-lg'>
            {fahrenheit ? (
              <div>
                {(currentWeather.main?.temp_max.toFixed() * 9) / 5 + 32}
                <sup>o</sup>/
                {(currentWeather.main?.temp_min.toFixed() * 9) / 5 + 32}
                <sup>o</sup>
              </div>
            ) : (
              <div>
                {currentWeather.main?.temp_max}
                <sup>o</sup>/{currentWeather.main?.temp_min}
                <sup>o</sup>
              </div>
            )}
          </h1>
        </div>
      </div>
      <div className='flex items-center justify-between p-4 border-b-2  border-main '>
        <div>
          <h1 className='text-lg'>
            <BsWind className='inline text-secondary' />
            <span className='text-white mx-2'>Wind</span>
          </h1>
        </div>
        <div>
          <h1 className='text-white text-lg'>
            {currentWeather.wind?.speed} mph
          </h1>
        </div>
      </div>
      <div className='flex items-center justify-between p-4 border-b-2  border-main '>
        <div>
          <h1 className='text-lg'>
            <BsMoisture className='inline text-secondary' />
            <span className='text-white mx-2'>Humidity</span>
          </h1>
        </div>
        <div>
          <h1 className='text-white text-lg'>
            {currentWeather.main?.humidity}%
          </h1>
        </div>
      </div>
      <div className='flex items-center justify-between p-4 border-b-2  border-main '>
        <div>
          <h1 className='text-lg'>
            <BsEyeFill className='inline text-secondary' />
            <span className='text-white mx-2'>Visibility</span>
          </h1>
        </div>
        <div>
          <h1 className='text-white text-lg'>
            {currentWeather.main?.humidity.toString().slice(0, 1)} mi
          </h1>
        </div>
      </div>
      <div className='flex items-center justify-between p-4 border-b-2  border-main '>
        <div>
          <h1 className='text-lg'>
            <BsDropletFill className='inline text-secondary' />
            {currentWeather.rain ? (
              <div className='inline'>
                <span className='text-white mx-2'>RainFall</span>
              </div>
            ) : (
              <div className='inline'>
                <span className='text-white mx-2'>Precipitation</span>
              </div>
            )}
          </h1>
        </div>
        <div>
          <h1 className='text-white text-lg'>
            {currentWeather.rain ? (
              <span className='text-xs lg:text-lg'>
                {rainFall['1h']}" expected in next 24h.
              </span>
            ) : (
              <span className='text-xs lg:text-lg'>
                {' '}
                None expected in next 7 days.
              </span>
            )}
          </h1>
        </div>
      </div>
      <div className='flex items-center justify-between p-4 border-b-2  border-main '>
        <div>
          <h1 className='text-lg'>
            <BsArrowDownUp className='inline text-secondary' />
            <span className='text-white mx-2'>Pressure</span>
          </h1>
        </div>
        <div className=''>
          <h1 className='text-white text-lg inline'>
            <BsArrowDown className='inline text-secondary' />
            <span className='mx-2'>{pressure.toFixed(2)} in</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Details;
