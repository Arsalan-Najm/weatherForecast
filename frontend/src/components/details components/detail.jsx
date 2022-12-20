import React from 'react';
import CurrentDetails from './desktop component/currentDetails';
import Sunrise from './phone components/sunrise';
import Wind from './phone components/wind';
import Feelslike from './phone components/feelsLike';
import Humidity from './phone components/humidity';
import Visibility from './phone components/visibility';
import RainFall from './phone components/rainfall';
function Detail() {
  return (
    <div className='relative p-5 grid grid-cols-2 place-items-center gap-3 md:grid-cols-1'>
      <CurrentDetails />
      <Sunrise />
      <Wind />
      <Feelslike />
      <Humidity />
      <Visibility />
      <RainFall />
    </div>
  );
}

export default Detail;
