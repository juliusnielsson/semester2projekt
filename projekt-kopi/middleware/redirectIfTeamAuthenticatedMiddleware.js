module.exports = (req, res, next) =>{
    if(req.session.userId){
        return res.redirect('/teamindex') // if user logged in, redirect to home page
    }
    next()
}