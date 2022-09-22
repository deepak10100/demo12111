const express = require('express')
const app = express()
const port = process.env.PORT || 8000
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//database connection
require('./db/db')
//models
const Register = require('./models/register');

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render("index")
})
app.get('/register', (req, res) => {
  
  res.render("register")
})
app.post('/register', async (req, res) => {
let pass = req.body.pass
let cpass = req.body.cpass

if (pass===cpass) {
  const CreateRegister = new Register({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    pass: pass,
    cpass: cpass,
});
await CreateRegister.save()
res.redirect("/login")
} else {
  
  res.render("/register")
}
})
app.get('/login', (req, res) => {
  res.render("login")
})
app.post('/login', async (req, res) => {
  let email = req.body.email
  let pass = req.body.pass
  console.log(email,pass)
 let usermail= await Register.findOne({email:email})
 if (usermail.pass===pass) {
  res.redirect("/deshboard")
 } else {
  res.redirect("/login")
 }
})
app.get('/deshboard', (req, res) => {
  res.render("deshboard")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})