const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const adminData = require('./routes/admin');

const shopData = require('./routes/shop');
const { urlencoded } = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','pug');
app.set('views', 'views');

app.use('/admin',adminData.routes);
app.use('/',shopData);
app.use('/',(req,res,next)=>{
    res.status(404).render('404', {pageTitle : 'Page not found'});
})

app.listen(5000);