const SportsTeam = require('../models/SportsTeam.js')

module.exports = async (req, res) =>{
    const sportsteams = await SportsTeam.find({}).populate('userid');

    console.log(req.session)       
    res.render('index',{
        sportsteams
    });
}