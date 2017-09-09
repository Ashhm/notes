import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler';
import checkToken from './middlewares/checkTocken';
import getUser from './middlewares/getUser';

//routes
import notes from './routes/notes';
import auth from './routes/auth';
import user from './routes/user';

import * as DataBaseServices from './services/DateBaseService';
import {serverPort, config} from './etc/config.json';

const app = express();

DataBaseServices.setUpConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret
}));
app.use(cors({origin: '*'}));

app.use('/auth', auth);
app.use('/user', checkToken, user);
app.use('/notes', notes);
app.use(getUser);

app.use('/admin', checkToken, (req, res) => {
    res.send('approved');
});

app.use(errorHandler);

const port = (serverPort || 8080);

const server = app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is listening on port: ${port}`);
});
