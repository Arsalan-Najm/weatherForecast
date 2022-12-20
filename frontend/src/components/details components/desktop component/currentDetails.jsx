import React, { useContext } from 'react';
import { WeatherContext } from '../../../context/weatherContext';
import { BsSunriseFill, BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs';
import Details from './details';
function CurrentDetails() {
  const { currentWeather, fahrenheit } = useContext(WeatherContext);
  let sunset = new Date(currentWeather.sys?.sunset * 1000);
  let sunrise = new Date(currentWeather.sys?.sunrise * 1000);
  return (
    <div className='hidden md:block max-w-full w-full min-h-[450px] bg-black/50 rounded-2xl '>
      <div className='p-2 m-2'>
        <h1 className='text-white text-2xl'>
          Weather Today in {currentWeather.name}, {currentWeather.name}{' '}
          {currentWeather.sys?.country}
        </h1>
      </div>
      <div className='p-2 m-2 flex justify-between items-center border-b-2 border-main'>
        <div className='text-center p-2'>
          <h1 className='text-white text-6xl'>
            {fahrenheit ? (
              <div>
                {' '}
                {(currentWeather.main?.feels_like.toFixed() * 9) / 5 + 32}
                <sup>o</sup> F
              </div>
            ) : (
              <div>
                {currentWeather.main?.feels_like}
                <sup>o</sup> C
              </div>
            )}
          </h1>
          <span className='text-white/50 text-xl'>Feels Like</span>
        </div>
        <div className='p-2 '>
          <BsSunriseFill className='text-secondary m-auto' size={80} />
          <h1 className='inline text-lg'>
            <BsArrowBarUp className='inline text-secondary' />{' '}
            <span className='text-white'>
              {sunrise.getHours() % 12 || 12}:
              {sunrise.getMinutes() < 10
                ? '0' + sunrise.getMinutes()
                : sunrise.getMinutes()}{' '}
              &nbsp;am&nbsp;
            </span>
          </h1>
          <h1 className='inline text-lg'>
            <BsArrowBarDown className='inline text-secondary' />{' '}
            <span className='text-white'>
              {sunset.getHours() % 12 || 12}:
              {sunrise.getMinutes() < 10
                ? '0' + sunrise.getMinutes()
                : sunrise.getMinutes()}{' '}
              pm
            </span>
          </h1>
        </div>
      </div>
      <Details />
    </div>
  );
}

export default CurrentDetails;
