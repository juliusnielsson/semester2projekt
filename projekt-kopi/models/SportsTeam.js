const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const SportsTeamSchema = new Schema({
  name: String,
  typeOfSport: String,
  age: String,
  level: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId, // suppose to be a valid mongodb object id. mongodb has specific ids for each doc and they have to be in a valid format
    ref: 'User', // reference User collection 
    required: true
  },  
  datePosted:{ 
    type: Date,
    default: new Date()
  },
  image: String
});

const SportsTeam = mongoose.model('SportsTeam',SportsTeamSchema);
module.exports = SportsTeam


