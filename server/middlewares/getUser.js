import * as UserService from '../services/UserService';

export default (req, res, next) =>{
    const {token} = req;

    UserService.getUserByToken(token)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(({message}) => {
            return next({
                status: 500,
                message
            });
        })
}