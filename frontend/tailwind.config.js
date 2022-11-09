/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#17171d',
				secondary: '#f8cb58',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
