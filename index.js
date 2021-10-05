const express = require('express')
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const cluckRouter = require('./routes/clucks');
const app=express();
app.use(logger('dev'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    methodOverride((req, res) => {
        if (req.body && req.body._method) {
            const method = req.body._method;
            return method;
        }
    })
);
app.use(cookieParser());
//Custom middleware to create and store cookies:
app.use((req,res, next) => {
    
    const username = req.cookies.username || '';
   
    res.locals.username = username;
    next();
  })
app.use('/clucks', cluckRouter);

app.get('/',(req,res)=>{

    res.render('home')
    
})
app.get("/sign_in", (req, res) => {
    res.render("sign_in");
});

app.post('/sign_in', (req, res) => {
    const username = req.body.username;
    res.cookie('username', username);
    res.redirect('/');
  });
  
  app.post('/sign_out', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
  });
  




const PORT=4000;
const Domain='localhost';


app.listen(PORT, Domain, () => {
    console.log(`Server listening on http://${Domain}:${PORT}`);
})