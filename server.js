const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const currentRoute = require('./routes/current');
const forecastRoute = require('./routes/forecast');
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// app.use(express.static(path.resolve(__dirname, './frontend/build')));
app.use(currentRoute);
app.use(forecastRoute);

// app.use('*', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
// });
app.get('/', (req, res) => {
	res.json('hello from the server');
});
app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	}
	console.log('app running on port', PORT);
});
