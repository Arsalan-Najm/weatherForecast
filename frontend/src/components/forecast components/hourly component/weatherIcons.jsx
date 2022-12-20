import React, { useContext, useRef } from 'react';
import { WeatherContext } from '../../../context/weatherContext';
import {
  BsCloud,
  BsSun,
  BsCloudDrizzle,
  BsCloudSnowFill,
  BsCloudLightningRain,
  BsCloudRain,
  BsCloudSun,
  BsCloudFog,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';
export const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  hour: 'numeric',
  hour12: true,
};

function WeatherIcons() {
  const { forecast, fahrenheit } = useContext(WeatherContext);
  const slideRef = useRef();
  const slideLeft = () => {
    slideRef.current.scrollLeft = slideRef.current.scrollLeft - 500;
  };
  const slideRight = () => {
    slideRef.current.scrollLeft = slideRef.current.scrollLeft + 500;
  };
  return (
    <div className='relative flex items-center'>
      <div className='p-1' onClick={slideLeft}>
        <BsChevronLeft className='hidden lg:block h-20 bg-main text-white rounded-sm cursor-pointer' />
      </div>
      <div
        className='relative m-auto w-full my-4 scroll overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth  place-items-center items-center md:min-h-[100px]'
        ref={slideRef}
      >
        {forecast.slice(0, 26)?.map((fore) => {
          let date = new Date(fore.dt_txt).toLocaleDateString('en', options);
          return (
            <div className='inline-block text-center border-r-2 px-6 border-main '>
              {NaN ? (
                <span className='text-white font-semibold'>server error</span>
              ) : (
                <span className='text-white font-semibold'>
                  {date.slice(date.lastIndexOf('at'))}
                </span>
              )}
              {fore.weather?.map((wea, i) =>
                wea.main === 'Clouds' ? (
                  <BsCloud
                    color='#2a52be'
                    size={35}
                    key={i}
                    className='m-auto'
                  />
                ) : wea.main === 'Clear' ? (
                  <BsSun size={35} key={i} className='m-auto' color='#fdb813' />
                ) : wea.main === 'Drizzle' ? (
                  <BsCloudDrizzle
                    size={35}
                    key={i}
                    className='m-auto'
                    color='#2a52be'
                  />
                ) : wea.main === 'Snow' ? (
                  <BsCloudSnowFill
                    size={35}
                    key={i}
                    className='m-auto'
                    color='#fffafa'
                  />
                ) : wea.main === 'Thunderstorm' ? (
                  <BsCloudLightningRain
                    size={35}
                    key={i}
                    className='m-auto'
                    color='c2cda3'
                  />
                ) : wea.main === 'Rain' ? (
                  <BsCloudRain
                    size={35}
                    key={i}
                    className='m-auto'
                    color='#9099a1'
                  />
                ) : wea.main === 'Atmosphere' ? (
                  <BsCloudSun
                    size={35}
                    key={i}
                    className='m-auto'
                    color='#c0d2da'
                  />
                ) : wea.main === 'Mist' ? (
                  <BsCloudFog
                    size={35}
                    key={i}
                    className='m-auto'
                    color='#abaeb0'
                  />
                ) : wea.main === 'Fog' ? (
                  <BsCloudFog
                    size={35}
                    key={i}
                    className='m-auto'
                    color='#abaeb0'
                  />
                ) : (
                  <h1>Network Error</h1>
                )
              )}
              <h1 className='text-secondary font-semibold'>
                {fahrenheit ? (
                  <div>
                    {(fore.main?.temp.toFixed() * 9) / 5 + 32}
                    <sup>o</sup>
                  </div>
                ) : (
                  <div>
                    {fore.main?.temp}
                    <sup>o</sup>
                  </div>
                )}
              </h1>
            </div>
          );
        })}
      </div>
      <div className='p-3' onClick={slideRight}>
        <BsChevronRight className='hidden lg:block h-20 rounded-sm  bg-main text-white cursor-pointer' />
      </div>
    </div>
  );
}
export default WeatherIcons;
