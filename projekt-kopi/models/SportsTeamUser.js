const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SportsTeamUserSchema = new Schema({
    name: String,
    userid: [{
        type: mongoose.Schema.Types.ObjectId, // suppose to be a valid mongodb object id. mongodb has specific ids for each doc and they have to be in a valid format
        ref: 'User'
    }],
    teamid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SportsTeam'
    }
})

const SportsTeamUser = mongoose.model('SportsTeamUser',SportsTeamUserSchema);
module.exports = SportsTeamUser

