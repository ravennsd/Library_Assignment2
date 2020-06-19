const express = require('express');
// const chalk = require('chalk');
const path = require('path');
const app = new express();


const nav = [ {link:'/', name: 'Home'},{link:'/books', name: 'Books'}, {link:'/authors', name: 'Authors'}, {link:'/signup', name: 'SignUp'},{link:'/login', name: 'Login'},];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoute')(nav);
const loginRouter = require('./src/routes/loginRoute')(nav);
const signupRouter = require('./src/routes/signupRoute')(nav);

app.use(express.static(path.join(__dirname,'/public')));
app.set('view engine','ejs');
app.set('views','./src/views');                                                          // or ..,__dirname + 'src/views');

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

app.get('/',function(req, res) {
                                                                                         // res.sendFile(__dirname + "/src/views/index.html"); THIS IS FOR HTML. 
    res.render("index",
    {
        nav,
        title:"Library",
    });                                                                                  //THIS IS FOR EJS. USE RENDER AND JUST THE FILE NAME, SINCE THE INITIAL PATH HAS BEEN SET IN LINE 6 ABOVE :./SRC/VIEWS
});

app.listen(2000); 


