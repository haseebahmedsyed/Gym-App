const mysql = require('mysql');
const conf = require('../../config/keys')

var mysqlConnection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database
})


const postContact = (req,res)=>{
  const sql = "INSERT INTO contacts (Name,Email,Phone,Message) VALUES ?"
  const values = [[req.body.Name,req.body.Email,req.body.Phone,req.body.Message]]
  mysqlConnection.query(sql,[values],(err,result)=>{
    if(err) return console.log(err);
    else{
        res.status(200).json({
            success : true        
        })
    }
  })  
}

const getContacts = (req, res) => {
    const sql = "SELECT * FROM contacts";
    mysqlConnection.query(sql, (err, result) => {
        if(err) return console.log(err);
        else{
            res.status(200).json({
                success: true,
                contacts: JSON.parse(JSON.stringify(result))
            })
        }
    })
}

module.exports ={postContact,getContacts};