import * as UserService from '../services/UserService';

export function getCurrentUser(req, res, next) {
    const {token} = req;

    //using a service to get user by token
    UserService.getUserByToken(token)
        .then(user => {
            return res.send(user)
        })
        .catch(({message})=> {
            return next({
                status: 500,
                message
            });
        });
}