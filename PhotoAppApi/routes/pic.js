//const express=require('express');
//expapp=express();
const applist = require('../ApiController/ApiFuncs.js');
const routes=require('express').Router();
routes.get('/register',applist.create);
module.exports=routes;
//module.exports=applist.create;
