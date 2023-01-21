// const dotenv= require('dotenv')
// dotenv.config({path:'backend/config.env'})
const mysql = require('mysql')
const express = require('express')
const body = require('body-parser')
const bodyParser = require('body-parser')
const app = express()
const cookieParser = require('cookie-parser')
const multer = require('multer');
// var forms = multer();

var cors = require('cors');
const corsOptions ={
    // origin:'*', 
    origin:true, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

 app.use(cors(corsOptions))

app.use(cookieParser());
app.use(bodyParser.json());

// app.use(forms.array()); 
app.use(bodyParser.urlencoded({ extended: true }));

const conf = require('./config/keys')
const config = {
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database
}

var mysqlConnection = mysql.createConnection(config);


mysqlConnection.connect((error)=>{
    if(!error) {
        console.log("Successfully connected to database");
    }
    else{
        console.log(`Database connection failed \n Error : ${JSON.stringify(error,undefined,2)}`);
    }
})

const memRouter = require('./routers/member/member-router')
app.use('/api/v1',memRouter);
const feeRouter = require('./routers/fee/fee-router');
app.use('/api/v1',feeRouter);
const shopRouter = require('./routers/shopping/shopping_router');
app.use('/api/v1',shopRouter);
const shopItemsRouter = require('./routers/shopitems/shopitems_router');
app.use('/api/v1',shopItemsRouter);
const contactRouter = require('./routers/contact/contact-router');
app.use('/api/v1',contactRouter);


if(process.env.NODE_ENV !== 'production'){
    const path = require('path');
    app.use(express.static(path.resolve(__dirname, '../build')))
    app.get('/*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../build','index.html'))
    })
}

app.listen(3000,()=>{
    console.log("Listening to port 3000...");
})
