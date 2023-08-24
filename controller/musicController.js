const Music = require("../models/Music");
const {music}=require('../thirdpartyjson')

const createMusic = async (req, res) => {
  try {
    const { trackName, artist, album } = req.body;

    const newMusic = new Music({
        trackName, artist, album 
    });
    await newMusic.save();
    return res.status(201).json(newMusic);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create Music" });
  }
};


const fetchndCreateMusic = async (req, res) => {
  try {
    let datain=await Music.insertMany(music)
    return res.status(200).json(music);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch Music" });
  }
};

const fetchMusic = async(req, res)=>{
    try {
        const music = await Music.find().populate('trackName', 'artist','album');
        return  res.status(200).json(music);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch music' });
      }
}

const fetchMusicById = async(req, res)=>{
    try {
        const music = await Music.findById(req.params.musicId).populate('artist', 'album');
        if (!music) {
          return res.status(404).json({ error: 'Music not found' });
        }
        return  res.status(200).json(music);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Music' });
      }
}


const updateMusic = async(req, res)=>{
    try {
        const { trackName, artist,album } = req.body;
        const music = await Music.findByIdAndUpdate(
          req.params.postId,
          { trackName, artist,album },
          { new: true }
        );
        if (!music) {
          return res.status(404).json({ error: 'music not found' });
        }
        return res.status(200).json(music);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to update music' });
      }
}

const deleteMusic = async(req, res)=>{
    try {
        const music = await Music.findByIdAndDelete(req.params.musicId);
        if (!music) {
          return res.status(404).json({ error: 'Music not found' });
        }
        res.status(200).json({ message: 'Music deleted successfully' });
      } catch (error) {
        return  res.status(500).json({ error: 'Failed to delete Music' });
      }
}



const serachMusic = async(req, res)=>{
    try {
        const { trackName, artist, album } = req.query;
        const query = {};
    
        if (trackName) {
          query.trackName = { $regex: trackName, $options: 'i' };
        }
        if (artist) {
          query.artist = { $regex: artist, $options: 'i' };
        }
        if (album) {
          query.album = { $regex: album, $options: 'i' };
        }
    
        const musicList = await Music.find(query);
        return res.send(musicList);
      } catch (error) {
        return res.status(500).send(error);
      }
}

  


module.exports = { createMusic, fetchMusic, fetchMusicById,updateMusic,deleteMusic,serachMusic, fetchndCreateMusic };
