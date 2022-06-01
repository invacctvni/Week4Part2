var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/about', (req, res, next) =>{
//   //tell express to render an hbs view template. 
//   res.render('about', 
//   {
//     email : "contact@company.com", 
//     title: "About our project"
//   })//no need to match with the router but the hbs in views. 
// });

module.exports = router; //handles requests of a particular point. 


