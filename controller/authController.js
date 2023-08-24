const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const registerUser = async(req, res)=>{
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = new User({ email, password: hashedPassword });
        await user.save();
    
        return res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        return res.status(500).json({ error: 'Registration failed' });
      }
}


const loginUser = async(req, res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user.email) {
          return res.status(401).json({ error: 'Authentication failed' });
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) { 
          return res.status(401).json({ error: 'Authentication failed' });
        }
    
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
        return  res.status(200).json({ token });
      } catch (error) {
        return  res.status(500).json({ error: 'Authentication failed' });
      }
}


module.exports = {registerUser,loginUser}

