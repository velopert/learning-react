const Router = require('koa-router');

const auth = new Router();
const authCtrl = require('./auth.ctrl');

auth.post('/login', authCtrl.login);
auth.get('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);

module.exports = auth;
