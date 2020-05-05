const User = require('../models/User.js')

module.exports = async (req,res)=>{
    const user = await User.findById(req.session.userId);
    console.log(user)
    res.render('profile',{
        user
    });
}