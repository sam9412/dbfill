const express = require('express');
const path = require('path');//trabajar con las rutas de SO
const bodyparser = require('body-parser');

const app =express();//instanciar express

//settings
app.set('port',process.env.PORT||3000);//configuracion del puerto
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../app/views'));//dirname me da la ruta de donde estoy

//middlewares//
app.use(bodyparser.urlencoded({extended:false}));

module.exports=app;
