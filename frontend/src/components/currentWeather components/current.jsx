import React, { useEffect, useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';
import CityName from './cityName';
import WeatherIcons from './weatherIcons';
import Description from './description';
import Temperature from './temperature';
import axios from 'axios';

function CurrentWeather() {
  const { setCurrentWeather } = useContext(WeatherContext);
  useEffect(() => {
    axios.get('/current').then((response) => setCurrentWeather(response.data));
  }, []);
  return (
    <>
      <div className='relative text-center p-4'>
        <div className='max-w-full w-full min-h-[320px] bg-black/50 rounded-3xl md:min-h-[360px]'>
          <CityName />
          <WeatherIcons />
          <Description />
          <Temperature />
        </div>
      </div>
    </>
  );
}

export default CurrentWeather;
