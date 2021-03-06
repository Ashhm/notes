import request from 'superagent';

import { apiPrefix } from '../etc/config.json';


//super agent instead of axis

//todo:add an api for updateNote
export default {
    listNote () {
        return request.get(`${apiPrefix}/notes`).then();
    },
    createNote (data) {
        return request.post(`${apiPrefix}/notes`).send(data).then();
    },
    //updateNote ()
    deleteNote (noteId) {
        return request.del(`${apiPrefix}/notes/${noteId}`).then();
    }
};