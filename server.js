const express = require('express');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const cors = require("cors");
const connectDB = require('./config/db')
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const newsRoutes = require('./routes/news');
const musicRoutes = require('./routes/music');
const ecommerceRoutes = require('./routes/ecommerce');
const socialmediaRoutes = require('./routes/socialmedia');
const movieRoutes = require('./routes/movie');
const weatherRoutes = require('./routes/weather');
const recipeRoutes = require('./routes/recipe');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json())

// AWS.config.update({
//     accessKeyId: 'AKIASMLC3LIMHQDQWNXY',
//     secretAccessKey: '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',
//     region: 'us-east-1', 
//   });

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/news', newsRoutes);
app.use('/music', musicRoutes);
app.use('/ecommerce', ecommerceRoutes);
app.use('/socialmedia', socialmediaRoutes);
app.use('/movie', movieRoutes);
app.use('/weather', weatherRoutes);
app.use('/recipe', recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

