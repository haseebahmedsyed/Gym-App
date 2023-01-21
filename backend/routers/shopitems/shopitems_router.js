const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {authorize,authorizeRole} = require('.././../middlewares/mem-del-updt')


const {createItems,getShopItems,deleteShopItems,updatePrice,updateQuantity} = require('./shopitems_controller');



router.post('/shopitems/create',authorize,authorizeRole('admin'),createItems);
router.get('/shopitems/get',getShopItems);
router.delete('/shopitems/delete/:id',authorize,authorizeRole('admin'),deleteShopItems);
router.put('/shopitems/updateprice/:id',authorize,authorizeRole('admin'),updatePrice);
router.put('/shopitems/updatequantity/:id',authorize,authorizeRole('admin'),updateQuantity);

module.exports = router;