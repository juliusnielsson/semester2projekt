const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) =>{
    const { username, password } = req.body;

    User.findOne({username:username}, (error,user) => {
        if (user){
            bcrypt.compare(password, user.password,/*typeOfUser */(error, same) =>{
                if(same){
                    req.session.userId = user._id
                    res.redirect('/teamindex')
                }
                else{
                    res.redirect('/auth/teamlogin')
                }
            })
        }
        else{
            res.redirect('/auth/teamlogin')
        }
    })
}