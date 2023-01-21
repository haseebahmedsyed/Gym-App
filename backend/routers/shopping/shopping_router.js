const express = require('express');
const router = express.Router();
const {authorize,authorizeRole} = require('.././../middlewares/mem-del-updt')

const {createShop,getOrders,getPendingOrders,getDeliveredOrders,updateDeliveryStatus,deleteOrder} = require('./shopping_controller');

router.post('/shop/create',createShop);
router.get('/shop/getallorders',authorize,authorizeRole('admin'),getOrders);
router.get('/shop/getpendingorders',authorize,authorizeRole('admin'),getPendingOrders);
router.get('/shop/getdeliveredorders',authorize,authorizeRole('admin'),getDeliveredOrders);
router.put('/shop/updatedeliverystatus/:id',authorize,authorizeRole('admin'),updateDeliveryStatus);
router.delete('/shop/deleteorder/:id',authorize,authorizeRole('admin'),deleteOrder);

module.exports = router;