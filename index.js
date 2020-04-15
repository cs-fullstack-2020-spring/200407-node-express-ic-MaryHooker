//Node and Express IC

//reference to the express module
let express = require('express');

//Create a server and save it in app
let app = express();

//Call the listen method on app
app.listen(3000,'localhost',()=>{
    console.log("Listening on port 3000");
})

//Add route
app.get('/',(req,res)=>{
    res.send("Welcome to my node & express server");
})

//Add another route
app.get('/whatIlearned',(req,res)=>{
    res.send("I learned how to use express and routes");
})

//Add another route
app.get('/questionsIhave',(req,res)=>{
    res.send("Why is the route path on the same line as the parameters?");
})

//Add another root that uses query params
app.get('/seeMyNumber/:number',(req,res)=>{
    res.send(`This number I typed in is ${req.params.number}`)
})


