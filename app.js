const express = require('express')
const mustacheExpress = require('mustache-express')
const  bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))


let vacations =[{city:Denver, image:download.jpeg, dateDepature: january 1 2018,returnDate: jan 5 2018}]
let user = []

app.engine('mustache',mustacheExpress())
app.set ('views','./views')
app.set('view engine','mustache')

app.use(session({
  secret: 'cat',
  resave: false,
  saveUninitialized: false
}))

app.listen(port,function(){
console.log("server is running")
})



app.post('/login',function(req,res){

  let username = req.body.username
  let password = req.body.password

  users.push({ username : username, password : password })
  console.log(users)

  let user = users.find(function(user){
    return user.username == username && user.password == password
  })
  if(user != null){

  }

  for(i = 0; i < users.length; i++){
    if (username == users[i].username){
      if(req.session) {
      req.session.username = username
      res.redirect("/vacation")
    }
  }
}})
app.get('/login', function(req,res){
  res.render('login')
})

app.post('/add-vacation',function(req,res){

  let city = req.body.city
  let image = req.body.image
  let dateDeparture = req.body.dateDeparture
  let dateReturn = req.body.dateReturn

  let vacationTrip =[{city:city, image:image, dateDepature: dateDepature,returnDate: returnDate}]
   vacations.push(vacationTrip)
  res.render('index',{vacationContent:vacations})
})


app.get('/add-vacation', function(req,res){
  res.render('add-vacation')
})
app.get('/vacation',function(req,res){
  res.render('index', {vacationContent:vacations})
})
app.post('/delete-trip',function(req,res){

    let city = req.body.city
    console.log(title)

    vacations = vacations.filter(function(vacation){
      return vacation.name != title
    })

    res.redirect('/vacation')
  })
