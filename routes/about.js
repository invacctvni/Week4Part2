// Import express and create a router obj. 
//option 2 create its own router js file. 
const express = require ('express')
const router = express.Router()

//configure routes. 
//routes are already registered to a specific route. 
//intention is to register this object to '/about' in app.js file. 
// /about/about don't wonna this. 
//get to /about
router.get('/', (req, res, next) => {
  //tell express to render an hbs view template. 
  res.render('about',
  {
    email: "contact@company.com", 
    title: "About our project"
  })//no need to match with the router but the hbs in views. 
});
//export the router object. 
module.exports = router //then go toapp.js