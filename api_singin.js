var express = require('express');
var bodyParser = require('body-parser');
let cors = require('cors');

// to encrypt password
const bcrypt = require('bcrypt');


var app = express();    

// add body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//allow cross origin requests
app.use(cors())

app.get('/',function(req,res){
    res.send("Welcome at Comviva");
    // res.json({message:'Hope you are doing well at comviva?'})
})

app.get('/signin',function(req,res){
  console.log("SigIn Data is here");  
  res.send("Hey There")
})

app.post('/register',function(req,res){
    const password = req.body.password;
    // const encryptdPassword = await bcrypt.hash(password,10);

    var users = {
        "email" : req.body.email,
        // "password" : encryptdPassword
        "password" : password
    }
    console.log("Data from the user ",users);
    res.send({
        "code" : 200,
        "success" : "user registered successfully"
    });

})

app.post('/login',function(req,res,next){
    
    var email = req.body.email;
    var password = req.body.password;
    console.log("LogIn");
    // res.send({
    //     "code":"200",
    //     "success":"LogIn Success"
    // })
    next();


    // if(error){
    //     res.send({"code":400,"failed":"error occured"})
    //     console.log("Hey")
    // }
    // else{
       
        
    // }

},function(res,results){
    console.log("Results are"+results)
    if(results.length > 0){
       console.log("Login Successful");
       res.send({
           "code" : 200,
           "success" : "login successful"
       })
   }
   else{
       res.send({"code":206,"success":"Email Does not Exists"});
       console.log("Email not found");
   }

})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
