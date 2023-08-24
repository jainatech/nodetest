const Weather = require("../models/Weather");
const axios = require("axios");

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
    res.status(201).json(newsobj);
  } catch (error) {
    console.log(error,"erjeerkk")
    res.status(500).json({ error: "Could not create weather data" });
  }
};
const createWeather = async (req, res) => {
  try {
    const weatherData = req.body;
    const createdWeather = await Weather.create(weatherData);
    res.status(201).json(createdWeather);
  } catch (error) {
    res.status(500).json({ error: "Could not create weather data" });
  }
};

const fetchWeather = async (req, res) => {
  try {
    const weatherRecords = await Weather.find();
    res.json(weatherRecords);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve weather data" });
  }
};

const updateWeather = async (req, res) => {
  try {
    const updatedWeather = await Weather.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedWeather);
  } catch (error) {
    res.status(500).json({ error: "Could not update weather data" });
  }
};

const deleteWeather = async (req, res) => {
  try {
    await Weather.findByIdAndDelete(req.params.id);
    res.json({ message: "Weather data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete weather data" });
  }
};

const searchWeather = async (req, res) => {
  try {
    const city = req.params.city;
    const weatherData = await Weather.findOne({ city });

    if (weatherData) {
      res.json(weatherData);
    } else {
      res
        .status(404)
        .json({ message: "Weather data not found for the specified city" });
    }
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve weather data" });
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
