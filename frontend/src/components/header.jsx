import axios from 'axios';
import React, { useContext } from 'react';
import { BsGeoAltFill } from 'react-icons/bs';
import { WeatherContext } from '../context/weatherContext';

function Header() {
	const { setCurrentWeather, setForeCast } = useContext(WeatherContext);
	const setDefaultCity = (e) => {
		axios.get('/current').then((response) => setCurrentWeather(response.data));
		axios.get('/forecast').then((response) => setForeCast(response.data));
	};
	return (
		<header className='relative max-w-full w-full '>
			<nav className='relative flex justify-between items-center p-4 bg-black/50'>
				<div>
					<h1 className='text-xl text-white font-semibold md:text-3xl'>
						Weather<span className='text-secondary'>Forecast</span>
					</h1>
				</div>
				<div>
					<button
						className='p-3 font-bold bg-secondary rounded-full md:hidden'
						onClick={setDefaultCity}
					>
						<BsGeoAltFill color='#222431' />
					</button>
					<button
						className='hidden p-3 font-bold bg-secondary rounded-sm duration-200 hover:opacity-50 md:block'
						onClick={setDefaultCity}
					>
						current location
					</button>
				</div>
			</nav>
		</header>
	);
}
export default Header;
