const mysql = require('mysql');
const conf = require('../../config/keys')

var mysqlConnection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database
})

const createShop = (req, res, next) => {
    const {
        Name,
        City,
        Address,
        Postalcode,
        Email,
        Phone,
        Deliverycharges,
        Items,
        Paymentmethod

    } = req.body

    const sql = "INSERT INTO shopstore (Name,City,Address,Postalcode,Email,Phone,Deliverycharges,Deliverystatus,Items,Paymentmethod,Shoppingdate) VALUES ?";

    const value = [[
        Name,
        City,
        Address,
        Postalcode,
        Email,
        Phone,
        Deliverycharges,
        "pending",
        JSON.stringify((Items)),
        Paymentmethod,
        new Date(Date.now())
    ]]

    mysqlConnection.query(sql, [value], (err, result) => {
        if (err) {
            return console.log(err);
        }
        else {
            res.status(200).json({ success: true, message: "Successfully Inserted" })
        }
    })




}

const getOrders = (req, res) => {
    const sql = "SELECT * FROM shopstore";
    mysqlConnection.query(sql, (err, result) => {
        if (err) {
            return console.log(err);
        }
        else {
            let result1 = JSON.parse(JSON.stringify(result));
            result1.map((val) => {
                let a = JSON.parse(val.Items);
                delete val.Items;
                val.Items = a;
            })
            res.status(200).json({
                success: true,
                results: result1
            })
        }
    })
}

const getPendingOrders = (req, res) => {
    const sql = 'SELECT * FROM shopstore WHERE Deliverystatus="pending"';
    mysqlConnection.query(sql, (err, result) => {
        if (err) {
            return console.log(err);
        }
        else {
            let result1 = JSON.parse(JSON.stringify(result));
            result1.map((val) => {
                let a = JSON.parse(val.Items);
                delete val.Items;
                val.Items = a;
            })
            res.status(200).json({
                success: true,
                results: result1
            })
        }
    })

}

const getDeliveredOrders = (req, res) => {
    const sql = 'SELECT * FROM shopstore WHERE Deliverystatus="delivered"';
    mysqlConnection.query(sql, (err, result) => {
        if (err) {
            return console.log(err);
        }
        else {
            let result1 = JSON.parse(JSON.stringify(result));
            result1.map((val) => {
                let a = JSON.parse(val.Items);
                delete val.Items;
                val.Items = a;
            })
            res.status(200).json({
                success: true,
                results: result1
            })
        }
    })
}

const updateDeliveryStatus = (req, res) => {

    const sql1 = 'SELECT Items FROM shopstore WHERE ShoppingID=?';
    mysqlConnection.query(sql1, [req.params.id], (err, result) => {
        if (err) {
            return console.log(err);
        }
        else {
            const items = JSON.parse(JSON.stringify(result[0].Items));
            const items2 = JSON.parse(items);
            for (let i = 0; i < items2.length; i++) {
                updateQuantity(parseInt(items2[i].product), parseInt(items2[i].quantity))
            }
            const sql = 'UPDATE shopstore SET Deliverystatus= ? WHERE ShoppingID=?';
            mysqlConnection.query(sql, ["delivered", req.params.id], (err, result) => {
                if (err) {
                    return console.log(err);
                }
                else{
                    res.status(200).json
                    ({
                        success: true,
                        message: "Successfully Updated"
                    })
                }
            })
        }

    });



}

const updateQuantity = (id, quantity) => {
    console.log(id);
    const sql = 'SELECT ProductQuantity FROM shopitems WHERE ProductID=?';
    mysqlConnection.query(sql, [id], (err, result) => {
        if (err) {
            return console.log(err);
        }
        else {
            const pquantity = JSON.parse(JSON.stringify(result[0]));
            console.log(pquantity);
            const val = (parseInt(pquantity.ProductQuantity) - quantity);
            const sql1 = 'UPDATE shopitems SET ProductQuantity= ? WHERE ProductID=?';
            mysqlConnection.query(sql1, [val, id], (err, result) => {
                if (err) {
                    return console.log(err);
                }

            })
        }

    })

}

const deleteOrder = (req, res) => {
    const sql = 'DELETE FROM shopstore WHERE ShoppingID=?';
    mysqlConnection.query(sql, [req.params.id], (err, result) => {
        if (err) {
            return console.log(err);
        }
        else {
            res.status(200).json
                ({
                    success: true,
                    message: "Successfully Deleted"
                })
        }
    })
}

module.exports = { createShop, getOrders, getPendingOrders, getDeliveredOrders, updateDeliveryStatus, deleteOrder };