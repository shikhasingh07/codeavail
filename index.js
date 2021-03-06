const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts'); 
const db = require('./config/mongoose');

//Layout configuration
app.use(expressLayout);
app.use(express.urlencoded());

//using the cookies for Mannual Auth
 app.use(cookieParser());
// extract style and scripts frm sub pages into pages

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
// use express router
app.use('/', require('./routes'));
//use for static files only
app.use(express.static('./assets'));

// FOR Setting  eJS part 
app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
