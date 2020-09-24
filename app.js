const express = require('express');
const app = express();
//we add the path module which is built in node.js
const path = require('path');
//we add the handlebars engine module
const exphbs = require('express-handlebars');
const main = require('./routes/main');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//we add the middle ware for the public folder and join it to the path to call our styles from it
app.use(express.static(path.join(__dirname,'public')));


//we add the middle wares for the engine
app.engine('handlebars',exphbs({defaultLayout: 'home'}));
app.set('view engine','handlebars');




app.use('/',main);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));