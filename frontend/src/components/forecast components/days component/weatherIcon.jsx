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
  const { forecast, fahrenheit } = useContext(WeatherContext);
  const day = new Date().getDay();
  const forecastDays = WEEKDAYS.slice(day, WEEKDAYS.length).concat(
    WEEKDAYS.slice(0, day)
  );
  return (
    <div className='relative'>
      {forecast.splice(0, 7)?.map((fore, index) => {
        return (
          <div
            key={index}
            className='border-b-2 border-main grid grid-cols-3  p-3'
          >
            <div>
              <span className='text-white text-2xl font-semibold md:text-4xl lg:hidden'>
                {forecastDays[index].slice(0, 3)}
              </span>
              <span className='hidden text-white text-2xl font-semibold md:text-4xl lg:block'>
                {forecastDays[index]}
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
            <div className='temp-box relative text-center flex items-center'>
              <span className='mx-2 text-white/50'>
                {fahrenheit ? (
                  <span>
                    {' '}
                    {(fore.main?.temp.toFixed() * 9) / 5 + 32}
                    <sup>o</sup>
                  </span>
                ) : (
                  <span>
                    {' '}
                    {fore.main?.temp}
                    <sup>o</sup>
                  </span>
                )}
              </span>
              <input
                type='range'
                defaultValue={fore.main?.temp}
                className='mx-2'
                disabled={true}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default WeatherIcons;
