import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import {serverPort} from './etc/config.json';

import * as db from '../server/utils/DataBaseUtils';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.use(cors({origin: '*'}));

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});


const port = (serverPort||8080);

const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
