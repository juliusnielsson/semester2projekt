const mongoose = require('mongoose')
const SportsTeamUser = require('../models/SportsTeamUser')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true, useFindAndModify: false});

module.exports = (req,res) =>{
    SportsTeamUser.findOne({teamid: req.body.teamid}, function (err, teamuser) {
        SportsTeamUser.findByIdAndUpdate(teamuser._id,{
            $push: { userid: req.session.userId }
        },null, (error, sportsteamuser) =>{
            console.log(error,sportsteamuser)
            res.redirect('/')
        })
    })
}
