/*
* Manage app router
* @Author Yuvraj Yadav 
* @Copyright Yuvisoft Technologies Pvt Ltd.
*/
(function(){
	'use strict'
	exports.routes = function(router){
		router.get('/', function (req, res) {
	      	res.render('index')
	    });
	}
}())