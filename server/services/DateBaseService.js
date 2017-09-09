import mongoose from 'mongoose';
import bluebird from 'bluebird';

import {dbConfig} from '../etc/config.json';


export function setUpConnection() {
    let mongoHost = `${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`;

    mongoose.Promise = bluebird;

    mongoose.connect(`mongodb://${mongoHost}`, {useMongoClient: true})
        .then(() => {
        return console.log(`Mongo database: ${mongoHost} is connected`);
        })
        .catch(err => {
            return console.log(err);
        });
}
