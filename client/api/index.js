import request from 'superagent';

import { apiPrefix } from '../../etc/config.json';


//super agent instead of axis
export default {
    listNote () {
        return request.get(`${apiPrefix}/notes`);
    },
    createNote (data) {
        return request.post(`${apiPrefix}/notes`).send(data);
    },
    deleteNotes (noteId) {
        return request.del(`${apiPrefix}/notes/${noteId}`);
    }
};