const check = require ('jsonwebtoken')
const user = require('../models/user')
require('dotenv').config()
module.exports = {
    autentication:(req,res,next)=>{
        if (req.headers) {
            check.verify(req.headers.token,process.env.secret,(err,verified)=>{
                if (!err) {
                    user.findbyId(verified)
                    .then(data=>{
                        if (data) {
                            res.locals.users = data
                            next()
                        } else {
                            res.status(403).json({
                                message:'user cannot found'
                            })
                        }
                    })
                    .catch(err=>{
                        console.error()
                        res.status(500).json({ message:'internal server error'})
                    })
                } else {
                    console.error()
                    res.status(500).json({ message:'internal server error'})
                }
            })
        }else{
            res.status(401).json({
                message:'you have to login first'
            })
        }
    },
    authorization:(req,res,next)=>{
        
    }
}