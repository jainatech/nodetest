const Weather = require("../models/Weather");
const axios = require("axios");

//fetching 3rd party api and storing in mongodb

const createWeatherthirdapi = async (req, res) => {
  try {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key=e09f3c44c12345e3b38114139232408&q=India"
    );
    let insertobj = {
      city: response.data.location.name,
      temperature: response.data.current.temp_f,
      conditions: response.data.current.condition.text,
    };
  
    const newsobj = new Weather(insertobj);
    await newsobj.save();
    return res.status(201).json(newsobj);
  } catch (error) {
    return res.status(500).json({ error: "Could not create weather data" });
  }
};
const createWeather = async (req, res) => {
  try {
    const weatherData = req.body;
    const createdWeather = await Weather.create(weatherData);
    return res.status(201).json(createdWeather);
  } catch (error) {
    return res.status(500).json({ error: "Could not create weather data" });
  }
};

const fetchWeather = async (req, res) => {
  try {
    const weatherRecords = await Weather.find();
    return res.json(weatherRecords);
  } catch (error) {
    return res.status(500).json({ error: "Could not retrieve weather data" });
  }
};

const updateWeather = async (req, res) => {
  try {
    const updatedWeather = await Weather.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(updatedWeather);
  } catch (error) {
    return res.status(500).json({ error: "Could not update weather data" });
  }
};

const deleteWeather = async (req, res) => {
  try {
    await Weather.findByIdAndDelete(req.params.id);
    return res.json({ message: "Weather data deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Could not delete weather data" });
  }
};

const searchWeather = async (req, res) => {
  try {
    const city = req.params.city;
    const weatherData = await Weather.findOne({ city });

    if (weatherData) {
      return res.json(weatherData);
    } else {
      return res
        .status(404)
        .json({ message: "Weather data not found for the specified city" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Could not retrieve weather data" });
  }
};

module.exports = {
  createWeather,
  fetchWeather,
  updateWeather,
  deleteWeather,
  searchWeather,
  createWeatherthirdapi,
};
