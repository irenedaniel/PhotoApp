const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const expapp=express();
const pic=require('./routes/pic.js')

//Port Number
const port=2030;

//Cors Module
expapp.use(cors());

//body parser
expapp.use(bodyParser.json());
expapp.use('/pic',pic)
//app.use('/pics',photo)
//app.use('/pics',photo)
//app.use('/pics',photo)
//require('./routes/pic.js')(expapp)

//Start server
expapp.listen(port,() => {
    console.log('Server is listening on port '+port);
});

// define a route
expapp.get('/', (req, res) => {
    //res.json({"msg": "api Resp"});
    res.send("Invalid Endpoint");
});
