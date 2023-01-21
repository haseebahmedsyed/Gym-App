const express = require('express');
const {authorize,authorizeRole} = require('.././../middlewares/mem-del-updt')
const path = require('path');
const router = express.Router();

const {Register,Login,Logout,Delete,getMe,getAllMem,uploadProfile,getProfile} = require('./member-controller')

router.post('/register',Register);
router.post('/user/login',Login);
router.post('/user/logout',Logout);
router.delete('/admin/delete/:id',authorize,authorizeRole('admin'),Delete);
router.get('/get/me',authorize,getMe);
router.get('/get/allmem',authorize,authorizeRole('admin'),getAllMem);
router.post('/member/profile',authorize,uploadProfile);
router.get('/member/getProfile',authorize,getProfile);

module.exports = router;