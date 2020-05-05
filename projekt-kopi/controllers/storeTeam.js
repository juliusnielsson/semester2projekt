const SportsTeam = require('../models/SportsTeam.js')
const SportsTeamUser = require('../models/SportsTeamUser')
const path = require('path')

module.exports = (req,res)=> {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'public/img', image.name), async (error) => {
        await SportsTeam.create({
            ...req.body,
            image: '/img/' + image.name,
            userid: req.session.userId
        }, (error, sportsteam) => {
            SportsTeamUser.create({
                teamid: sportsteam._id, userid: [], name: sportsteam.name
            })
            res.redirect('/teamindex')
        })
    })
}