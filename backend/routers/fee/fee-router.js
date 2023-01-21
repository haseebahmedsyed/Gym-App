const express = require('express');
const router = express.Router();
const {AddFee,paidUser,notpaidUser,feeStatusUpdate,getFees}=require('./fee-controller');
const {authorize,authorizeRole} = require('../../middlewares/mem-del-updt')


router.post('/fee/pay',authorize,AddFee);
router.get('/fee/paid',authorize,authorizeRole('admin'),paidUser)
router.get('/fee/notpaid',authorize,authorizeRole('admin'),notpaidUser)
router.put('/fee/statusupdate',authorize,feeStatusUpdate)
router.get('/fee/get',authorize,getFees)





module.exports = router;