const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/current', (req, res) => {
  axios.get('https://ipapi.co/city').then((response) => {
    const city = response.data;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80747e5e5919d14704c6fafc03db8015&units=metric`
      )
      .then((response2) => {
        res.send(response2.data);
      })
      .catch((err) => console.log(err.message));
  });
});
router.get('/current/:city', (req, res) => {
  const city = req.params.city;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80747e5e5919d14704c6fafc03db8015&units=metric`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
