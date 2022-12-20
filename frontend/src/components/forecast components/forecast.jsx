import React, { useEffect, useContext } from 'react';
import Upcoming from './days component/upcoming';
import { WeatherContext } from '../../context/weatherContext';
import axios from 'axios';
import WeatherIcons from './hourly component/weatherIcons';
function Forecast() {
  const { setForeCast } = useContext(WeatherContext);

  useEffect(() => {
    axios.get('/forecast').then((response) => setForeCast(response.data));
  }, []);
  return (
    <>
      <div className='relative flex items-center'>
        <div className='relative w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide p-4'>
          <div className='bg-black/50 max-w-full w-full min-h-[180px] rounded-3xl p-2'>
            <div className='p-2 border-b-2 border-main'>
              <h3 className='text-white/30 font-semibold text-sm md:text-lg'>
                Showing condition for upcoming 3 hours.
              </h3>
            </div>
            <WeatherIcons />
          </div>
        </div>
      </div>
      <Upcoming />
    </>
  );
}
export default Forecast;
