const mysql = require('mysql');
const createJWT = require('../../methods/create-jwt')
let bcrypt = require('bcryptjs');

const conf = require('../../config/keys')

var mysqlConnection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database
})

const Register = (req, res) => {
    let mem = req.body;
    mysqlConnection.query("SELECT Email FROM members WHERE Email = ?", req.body.Email, async (err, result) => {
        if (err) {
            return res.json({
                success: false,
                msg:"Try again with valid credentials"
            })
        }
        else if (req.body.Email === result[0] || result.length >= 1) {
            return res.json({ 
                success :false,
                msg:"Try with other email"
             })
        }
        else {
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(mem.Password, salt);
            const sql = "INSERT INTO members (Package,Name,Email,Password,Mobile,Age,weight,Gender,Role,ProfilePic) VALUES ?";
            var values = [[mem.Package, mem.Name, mem.Email, hash, mem.Mobile, mem.Age, mem.Weight, mem.Gender, 'user', 'null']]
            mysqlConnection.query(sql, [values], (err, result) => {
                if (!err) {
                    res.status(200).json({ success: true, msg: "Successfully Registered" })
                    console.log(result)
                }
                else {
                    console.log(err);
                }
            })
        }
    });
}

const Login = (req, res) => {
    let mem = req.body;
    const quuery = "SELECT Email,Password FROM members WHERE Email= ?"
    mysqlConnection.query(quuery, mem.Email, async(error, result) => {
        // console.log(JSON.parse((JSON.stringify(result))))
        let cred = JSON.parse((JSON.stringify(result[0])))
        const passChek = await bcrypt.compare(mem.Password, cred.Password)
        if (error) {
            return res.json({ success: false, msg: "Try Again" })
        }
        else if (mem.Email !== cred.Email || !passChek) {
            return res.json({ success: false, msg: "Invalid Credentials" })
        }
        else if (mem.Email === cred.Email && passChek) {
            const sql = "SELECT MemID,Role,Name FROM members WHERE Email= ?"
            mysqlConnection.query(sql, mem.Email, (error, result2) => {
                let memid = JSON.parse(JSON.stringify(result2[0]))
                if (error) {
                    console.log(error);
                    return
                }
                else {
                    const Token = createJWT(memid.MemID);

                    res.status(200).cookie("token", Token, {
                        expires: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)),
                        httpOnly: true
                    }).json({
                        success: true,
                        token: Token,
                        msg:"Logging in sucessfully",
                        role: memid.Role,
                        name: memid.Name
                    })
                }

            })
        }
    })
}

const Logout = (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({ success: true, msg: "Successfully logged out" })
}

const Delete = (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM members WHERE MemID =?"
    mysqlConnection.query(sql, id, (err, result) => {
        if (err) {
            return console.log(err);
        }

        return res.status(200).json({ msg: "Successfully Deleted" })
    })
}

const getMe = (req, res) => {
    const sql = "SELECT * FROM members WHERE MemID =?";
    mysqlConnection.query(sql, req.user_id, (err, result) => {
        if (err) {
            return console.log(err);
        }
        else {
            const res1 = JSON.parse(JSON.stringify(result));
            res.status(200).json({
                success: true,
                result: res1
            })
        }
    })
}

const getAllMem = (req, res) => {
    const sql = "SELECT * FROM members Where Role='user' ";
    mysqlConnection.query(sql, (err, result) => {
        if (err) {
            return console.log(err);
        }
        else {
            const res1 = JSON.parse(JSON.stringify(result));
            res.status(200).json({
                success: true,
                result: res1
            })
        }
    })
}

const uploadProfile = (req, res) => {
    console.log(req.file);
    sql1 = 'UPDATE members SET ProfilePic = ? WHERE MemID=?';
    mysqlConnection.query(sql1, [req.body.url, req.user_id], (err1, result1) => {
        if (err1) {
            return console.log(err1);
        } else {
            res.status(200).json({
                success: true
            })
        }
    })

}

const getProfile= (req, res) => {
    const sql = "SELECT ProfilePic FROM members where MemID=?";
    mysqlConnection.query(sql,[req.user_id] ,(err, result) => {
        if (err) {
            return console.log(err);
        }
        else {
            const res1 = JSON.parse(JSON.stringify(result[0]));
            res.status(200).json({
                success: true,
                result:res1
            })
        }
    })
}

module.exports = { Register, Login, Logout, Delete, getMe, getAllMem, uploadProfile,getProfile }