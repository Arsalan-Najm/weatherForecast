import React from 'react';

function Footer() {
	return (
		<footer className='relative w-full bg-black/50 p-4  my-10'>
			<div>
				<a
					href='https://arsalan-najm.web.app/'
					target='_blank'
					rel='noreferrer'
					className='text-lg block text-white font-semibold underline p-1'
				>
					By Arsalan Najm
				</a>
				<p className='text-white p-1 font-semibold'>
					Built with ReactJS, NodeJS and ExpressJS.
				</p>
				<a
					href='https://openweathermap.org/'
					target='_blank'
					rel='noreferrer'
					className='text-secondary block underline p-1'
				>
					Powered By openweathermap API.
				</a>
			</div>
		</footer>
	);
}
export default Footer;
