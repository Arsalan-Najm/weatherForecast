import { useState, useRef, useEffect } from 'react';
import Header from './components/header';
import Search from './components/search';
import CurrentWeather from './components/currentWeather components/current';
import Forecast from './components/forecast components/forecast';
import Detail from './components/details components/detail';
import Footer from './components/footer';
import { WeatherContext } from './context/weatherContext';
import { ClockLoader } from 'react-spinners';
import $ from 'jquery';
function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForeCast] = useState([{}]);
  const [location, setLocation] = useState('');
  const [fahrenheit, setFahrenheit] = useState(false);
  const loaderRef = useRef();
  useEffect(() => {
    $(loaderRef.current).fadeOut(1500);
  });
  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        setCurrentWeather,
        location,
        setLocation,
        forecast,
        setForeCast,
        fahrenheit,
        setFahrenheit,
      }}
    >
      <div className='App w-full h-screen'>
        <div
          className='fixed w-full h-screen bg-main z-50 flex justify-center items-center'
          ref={loaderRef}
        >
          <ClockLoader size={70} color='#f8cb58' />
        </div>
        <Header />
        <Search />
        <CurrentWeather />
        <Forecast />
        <Detail />
        <Footer />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
