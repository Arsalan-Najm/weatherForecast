import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { WeatherContext } from '../context/weatherContext';
import axios from 'axios';
function Search() {
	const { location, setLocation, setCurrentWeather, setForeCast } =
		useContext(WeatherContext);

	const handleChange = (e) => {
		e.preventDefault();
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=80747e5e5919d14704c6fafc03db8015&units=metric`
			)
			.then((response) => setCurrentWeather(response.data), setLocation(''));
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=80747e5e5919d14704c6fafc03db8015&units=metric`
			)
			.then((response) => setForeCast(response.data.list), setLocation(''));
	};
	return (
		<div className='relative max-w-full w-full'>
			<div className='relative w-full p-5 flex justify-between items-center'>
				<form
					className='w-full'
					onSubmit={handleChange}
				>
					<input
						type='text'
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						placeholder='search a city'
						className='px-3 w-full py-2 rounded-full bg-black/50 text-white'
					/>
					<button
						className='absolute right-6 top-6 bg-secondary w-8 h-8 flex justify-center items-center rounded-full'
						onClick={handleChange}
					>
						<BsSearch
							size={16}
							color='#222431'
						/>
					</button>
				</form>
			</div>
		</div>
	);
}
export default Search;
