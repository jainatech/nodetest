const News = require('../models/News');
const axios=require('axios')


const fetchNews = async(req, res)=>{
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=675716ab4d5c4873ad0edf1ed6424ac1')
        let responseobj=response.data.articles
      
        let datain=await News.insertMany(responseobj)
       
        res.status(201).json(responseobj);
      } catch (error) {
        console.log("err",error);
        res.status(500).json({ error: 'Failed to fetch news' });
      }
}


const createNews = async(req, res)=>{
    try {
        const {category, author, title, description } = req.body;
    
        const newNews= new News({
            category, author, title, description
          });
        await newNews.save();
        res.status(201).json(newNews);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create news' });
      }
}


const updateNews = async(req, res)=>{
    try {
        const {  category, author, title, description} = req.body;
        const news = await News.findByIdAndUpdate(
          req.params.newsId,
          { category, author, title, description },
          { new: true }
        );
        if (!news) {
          return res.status(404).json({ error: 'News not found' });
        }
        res.status(200).json(news);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update news' });
      }
}

const deleteNews = async(req, res)=>{
    try {
        const news = await News.findByIdAndDelete(req.params.newsId);
        if (!news) {
          return res.status(404).json({ error: 'News not found' });
        }
        res.status(200).json({ message: 'News deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete News' });
      }
}


const filterNews = async(req, res) => {
    const category = req.params.category;
        try {
            const newsdata= await News.find({ category: category })
            if (!newsdata) {
              return res.status(404).json({ error: 'not found' });
            }
            res.status(200).json(newsdata);
          } catch (error) {
            res.status(500).json({ error: 'Failed to find News' });
          }
};


const serachNews = async(req, res) => {
    const keywords = req.query.keywords;
  
    try {
        const newsdata= await News.find({
            $or: [
                { title: { $regex: keywords, $options: 'i' } }, 
                { description: { $regex: keywords, $options: 'i' }},
                { category: { $regex: keywords, $options: 'i' }} 
            ]
        })
    
        if (!newsdata) {
          return res.status(404).json({ error: 'not found' });
        }
        res.status(200).json(newsdata);
      } catch (error) {
        res.status(500).json({ error: 'Failed to find News' });
      }
}


module.exports = {fetchNews,createNews,updateNews,deleteNews,filterNews,serachNews}

