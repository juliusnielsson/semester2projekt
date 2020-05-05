const SportsTeamUser = require('../models/SportsTeamUser.js')

module.exports = async (req, res) =>{
    const sportsteamusers = await SportsTeamUser.find({})

    res.render('teamIndex',{
        sportsteamusers
    });
}