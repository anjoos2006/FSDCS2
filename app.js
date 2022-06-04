const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const bodyParser = require('body-parser'); //**CS2** Importing body-parser 
const mongoose = require('mongoose'); //** CS2 importing mongoose

const PORT = process.env.PORT || 3000;


// Removed <!-- ***CS2** P2 -->

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute'); // **CS2** Changed the module name in the routes folder from homerouter to homeroute
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');


const app = new express; 

app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 




app.get('/',function(req,res){

    res.render('index',{});
    
});

app.listen(PORT,()=>{
    console.log("Server Ready on 3000"); // **CS2 **
});