const express = require('express');
const authMiddleware = require('../middleware/auth'); 
const { createWeather, fetchWeather, updateWeather, deleteWeather, searchWeather,createWeatherthirdapi } = require('../controller/weatherController');
const router = express.Router();


router.post('/',authMiddleware,createWeather);

router.post('/create-weather-third',authMiddleware, createWeatherthirdapi);

router.get('/', authMiddleware,fetchWeather);

router.get('/search', authMiddleware, searchWeather);

router.put('/:id', authMiddleware, updateWeather);

router.delete('/:id', authMiddleware, deleteWeather);



module.exports = router;
