// get    /users
// get    /users/:uuid
// post   /users
// put    /users/:uuid
// delete /users/:uuid

import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import user_repository from '../repositories/user_repository';

const usersRoute = Router();
const { OK, CREATED } = StatusCodes;

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await user_repository.findAllUsers();
    res.status(OK).json(users);
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(OK).send({uuid});
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    console.log(req.body);
    res.status(CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;

    res.status(OK).send({ modifiedUser });
});

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(OK);
});

export default usersRoute;