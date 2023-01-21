const mysql = require('mysql');
const conf = require('../../config/keys')

var mysqlConnection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database
})

const AddFee = (req, res) => {

    const qq = 'Select ADDDATE(Date,INTERVAL 30 DAY) as "Date",FeeID FROM fees WHERE MemID =?'
    mysqlConnection.query(qq, req.user_id, (err, results) => {
        if (err) {
            return console.log(err);
        }
        else if (results.length === 0) {
            const sql = 'INSERT INTO fees (Package,MemID,Status,Date,Amount) VALUES ?';
            const value = [[req.body.Package, req.user_id, req.body.Status, new Date(), req.body.Amount]];
            mysqlConnection.query(sql, [value], (error, result) => {
                if (error) {
                    return console.log(error);
                }

                const sql1 = 'UPDATE members SET Package =? WHERE MemID=?';
                mysqlConnection.query(sql1, [req.body.Package, req.user_id], (error1, result1) => {
                    if (error1) {
                        return console.log(error1);
                    }

                    return res.status(200).json({ success: true, message: "Transaction has been done successfully" });

                })

            })
        }
        else {
            const cred = JSON.parse(JSON.stringify(results[0]));
                const sql = `UPDATE fees SET Package = '${req.body.Package}',Status='${req.body.Status}',Date='${(cred.Date).slice(0,10)}', Amount=${req.body.Amount} WHERE FeeID=${cred.FeeID}`;
                mysqlConnection.query(sql,(error, result) => {
                    if (error) {
                        return console.log(error);
                    }

                    const sql1 = 'UPDATE members SET Package =? WHERE MemID=?';
                    mysqlConnection.query(sql1, [req.body.Package, req.user_id], (error1, result1) => {
                        if (error1) {
                            return console.log(error1);
                        }

                        return res.status(200).json({ success: true, message: "Transaction has been done successfully" });

                    })

                })
            // }

        }
    })


}

const paidUser=(req,res,next)=>{
    const sql = 'SELECT members.Name, members.Email, members.Mobile,members.Package,fees.Status,fees.Amount,fees.Date FROM members JOIN fees ON members.MemID=fees.MemID and fees.Status="paid"';
    mysqlConnection.query(sql,(err,result)=>{
        if(err){
            return console.log(err);
        }
        else{
            const res1 = JSON.parse(JSON.stringify(result));
            res.status(200).json({
                success: true,
                results:res1
            })
        }
    })
}

const notpaidUser=(req,res)=>{
    const sql='SELECT members.Name, members.Email, members.Mobile,members.Package,fees.Status,fees.Amount,fees.Date FROM members JOIN fees ON members.MemID=fees.MemID and fees.Status="unpaid"';
    mysqlConnection.query(sql,(err,result)=>{
        if(err){
            return console.log(err);
        }
        else{
            const res1 = JSON.parse(JSON.stringify(result));
            res.status(200).json({
                success: true,
                results:res1
            })
        }
    })
}

const feeStatusUpdate=(req,res)=>{
    const sql = 'SELECT Status FROM fees WHERE MemID=?';
    mysqlConnection.query(sql,[req.user_id],(err,result)=>{

        if(err){
            return console.log(err);
        }
        else if(result[0]===[] || result[0]===null || result[0]===undefined){            return res.status(401).json({
                success: false,
                message:"You have to pay first fee in order to update"
            })
        }
        else{
            const sql1 = 'UPDATE fees SET Status =? WHERE MemID=?';
            mysqlConnection.query(sql1,["unpaid",req.user_id],(err1,result1)=>{
                if(err1){
                    return console.log(err1);
                }
                else{
                    res.status(200).json({
                        success: true
                    })
                }
            })

        }
    })

}

const getFees=(req,res) => {
    const sql = "SELECT Date FROM fees WHERE MemID = ?";
    mysqlConnection.query(sql,[req.user_id] ,(err, result) => {
        console.log(result);
        if(err){
            return res.status(404).json({
                success: false
            })
        }
        else{
            if(result.length<=0){
                return res.status(404).json({
                    success: false,
                    mesage:"success is false"
                })
            }
            else{
                const res1 = JSON.parse(JSON.stringify(result[0]));
                return res.status(200).json({
                    success: true,
                    month:res1["Date"].slice(5,7),
                    date:res1["Date"].slice(8,10)
                })

            }
        }
    })
}

module.exports = { AddFee ,paidUser,notpaidUser,feeStatusUpdate,getFees}