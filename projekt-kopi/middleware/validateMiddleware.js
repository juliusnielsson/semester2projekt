module.exports = (req,res,next)=>{    
    if(req.files == null || req.body.name == null || req.body.level == null || req.body.typeOfSport == null || req.body.age == null){
        return res.redirect('/teams/new')
    }    
    next()
}