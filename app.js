const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'teste1234',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
app.use('/', indexRouter);
app.use('/', authRouter);

const PORT = 3000; 
app.listen(PORT, () => {
    console.log(`Acesse http://localhost:${PORT}`);
});