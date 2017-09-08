import User from '../models/user';
import jwt from 'jsonwebtoken';
import {config} from '../etc/config.json';

export const signup = (req, res, next) => {
    const credentials = req.body;

    //create() function fires save()
    User.create(credentials)
        .then(result => {
            return res.send(result);
        })
        .catch(({errmsg}) => {
            return next({
                status: 400,
                message: errmsg
            });
        });
};

export const signin = (req, res, next) => {
    const {login, password} = req.body;

    User.findOne({login})
        .then(user => {
            user.comparePasswords(password)
                .then(() => {
                    //req.session.userId = user._id;
                    return res.send(jwt.sign({_id: user._id}, config.secret));
                })
                .catch(err => next({
                    status: 400,
                    message: `Bad credentials for ${login}`
                }))
        })
        .catch(err => next({
            status: 400,
            message: `User ${login} not found`
        }))
};