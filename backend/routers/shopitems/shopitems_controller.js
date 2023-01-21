const mysql = require('mysql');

const conf = require('../../config/keys')

var mysqlConnection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database
})

const createItems=(req,res,next)=>{
    const ProductName=req.body.ProductName;
    const ProductPrice= req.body.ProductPrice;
    const ProductQuantity= req.body.ProductQuantity;
    const ProductImage = req.body.ProductImage;
    const sql = 'INSERT INTO shopitems (ProductName,ProductPrice,ProductQuantity,ProductImage) VALUES ?'
    const values=[[ProductName,ProductPrice,ProductQuantity,ProductImage]]
    mysqlConnection.query(sql,[values],(err,resullt)=>{
        if(err){
            return console.log(err);
        }
        else{
            res.status(200).json({
                success: true
            })
        }
    })
}

const getShopItems=(req,res)=>{
    const sql= "SELECT * FROM shopitems";
    mysqlConnection.query(sql,(err,result)=>{
        if(err){
            return console.log(err);
        }
        else{
            const pquantity = JSON.parse(JSON.stringify(result));
            res.status(200).json({ success: true ,result: pquantity});
        }
    })
}

const deleteShopItems=(req,res) =>{
    const sql= "DELETE FROM shopitems WHERE ProductID = ?";
    mysqlConnection.query(sql,[req.params.id],(err,result)=>{
        if(err){
            return console.log(err);
        }
        else{
            res.status(200).json({ success: true});
        }
    })
}


const updatePrice=(req,res) => {
    console.log(req.body);
    const sql = "UPDATE shopitems SET ProductPrice = ? WHERE ProductID = ?";
    mysqlConnection.query(sql,[req.body.ProductPrice,req.params.id],(err, result) => {
        if(err){
            return console.log(err);
        }
        else{
            res.status(200).json({ success: true});
        }
    })
}

const updateQuantity=(req,res) => {
    const sql = "UPDATE shopitems SET ProductQuantity = ? WHERE ProductID = ?";
    mysqlConnection.query(sql,[req.body.ProductQuantity,req.params.id],(err, result) => {
        if(err){
            return console.log(err);
        }
        else{
            res.status(200).json({ success: true});
        }
    })
}

module.exports = {createItems,getShopItems,deleteShopItems,updatePrice,updateQuantity}