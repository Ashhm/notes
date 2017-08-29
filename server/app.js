import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import {serverPort} from './etc/config.json';

import dbUtils from "./utils/DataBaseUtils";

dbUtils.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.use(cors({origin: '*'}));

app.get('/notes', (req, res) => {
    dbUtils.listNotes().then(data => res.send(data)).catch(err => console.log(err));
});

app.post('/notes', (req, res) => {
    if (req.body.id){
        dbUtils.updateNote(req.body).then(data => res.send(data)).catch(err => console.log(err));
    } else {
        dbUtils.createNote(req.body).then(data => res.send(data)).catch(err => console.log(err));
    }
});

app.delete('/notes/:id', (req, res) => {
    dbUtils.deleteNote(req.params.id).then(data => res.send(data)).catch(err => console.log(err));
});

app.put('/notes/:id', (req, res) => {
   dbUtils.updateNote(req.params.id, req.body).then(data => res.send(data)).catch(err => console.log(err));
});


const port = (serverPort||8080);

const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
