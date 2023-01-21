const jwt = require('jsonwebtoken');
const mysql = require('mysql')
const conf = require('../config/keys')
var mysqlConnection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database
})

const authorize = (req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return res.status(400).json({success:false, message:"Login First to accesss the resource"});
    }

    const decode=jwt.verify(token,conf.token)
    req.user_id = decode;
    next();
}

const authorizeRole=(roles)=>{
    return (req,res,next)=>{
        
        const sql = "SELECT Role FROM members WHERE MemID = ?";
        mysqlConnection.query(sql,[req.user_id],(err,result)=>{
            const myrole = JSON.parse(JSON.stringify(result[0]))
            if(err){
                return console.log(err);
            }
            else if (roles!==myrole.Role){
                console.log(myrole);
                console.log(myrole.Role);
                return res.json({message: "Not Allowed"})
            }
            else{
                next();
            }
        })
    }
}

module.exports={authorize,authorizeRole};