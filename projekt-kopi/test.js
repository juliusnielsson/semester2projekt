const mongoose = require('mongoose')
const SportsTeamUser = require('./models/SportsTeamUser')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

var id = "5e9fed01d7aa7d3e478b9c62"

SportsTeamUser.find({
    userid: id
}, (error, sportsteamuser) =>{
    console.log(error,sportsteamuser)
})
