/*
* Main App
* @Author Yuvraj Yadav 
* @Copyright Yuvisoft Technologies Pvt Ltd.
*/
(function(){
   const express = require("express"),
        config = require("./config/config"),
        app = express(),
        router = express.Router(),
        rout = require("./router/router").routes(router);
      
    /* set app configuration */  
    app.engine('html', require('ejs').renderFile);
    app.set('views', __dirname + '/' + config.viewDir);
    app.set('view engine', config.viewEngine);
    app.use(express.static(__dirname + '/' + config.publicDir));
    app.use('/', router);
	app.listen(process.env.port || config.port, function(){
        console.log("server started !") 
    });

}())