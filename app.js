(function(){
   const express = require("express"),
        config = require("./config/config"),
        app = express();
        
    app.listen(process.env.port || config.port, function(){
        console.log("server started !") 
    });
    
    app.get('*', function (req, res) {
      res.send('Hello World!')
    })

}())