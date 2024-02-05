const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
require("dotenv").config();

//"pug"or"hbs"or"ejs"を選択する。ちなみにejsの方が合っている気がする。
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controller/error');
const db = require('./util/database');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);