const jwt = require('jsonwebtoken');

const conf = require('../config/keys')

const createJWT = (id)=>{
    return jwt.sign(id,conf.token);
}

module.exports = createJWT;