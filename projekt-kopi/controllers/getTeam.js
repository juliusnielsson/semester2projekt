const SportsTeam = require('../models/SportsTeam.js')

module.exports = async (req,res)=>{        
    const sportsteam = await SportsTeam.findById(req.params.id).populate('userid');
    console.log(sportsteam)
    res.render('team',{
        sportsteam
    });    
}