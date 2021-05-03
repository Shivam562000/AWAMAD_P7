const express = require('express')
const app = express();

app.get('/multipleCallback', function (req, res, next) {
    console.log('This is first Function')
    next()
    
  }, function (req, res) {
    console.log('This is second Function')
    res.send('Two Functions implemented')
  })

  
app.get('/differentRoute', function (req, res) {
    console.log('This is Different Route')
    res.send('This is differentRoute')
  })

var func1 = function (req, res, next) {
    console.log('Callback Function No.1')
    next()
  }
  
  var func2 = function (req, res, next) {
    console.log('Callback Function No.2')
    next()
  }
  
  var func3 = function (req, res) {
    console.log('Callback Function No.2')
    res.send('Last Function Executed')
  }
  
  app.get('/callbackArray', [func1, func2, func3])


app.listen(5000,() => console.log("Listening on port 5000"))