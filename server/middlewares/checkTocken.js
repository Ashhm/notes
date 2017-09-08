import jwt from 'jsonwebtoken';
import {config} from '../etc/config.json';

export default (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token)
        return next({
            status: 403,
            message: 'Forbidden. No token.'
        });

    //Promises i`snt present
    jwt.verify(token, config.secret, (err, decoded) => {
       if (err) {
            return next({
                status: 400,
                message: err.message
            });
        }
        req.token = decoded;
        next();
    })
}