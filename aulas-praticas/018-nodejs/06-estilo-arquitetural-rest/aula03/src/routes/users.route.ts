// get    /users
// get    /users/:uuid
// post   /users
// put    /users/:uuid
// delete /users/:uuid

import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import user_repository from '../repositories/user.repository';

const usersRoute = Router();
const { OK, CREATED } = StatusCodes;

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await user_repository.findAllUsers();
    res.status(OK).json(users);
});

usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
        const uuid = req.params.uuid;
        const user = await user_repository.findById(uuid);
        res.status(OK).send(user);
    } catch (error) {
        next(error);
    }
});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await user_repository.create(newUser);
    console.log(req.body);
    res.status(CREATED).send(uuid);
});

usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;

    await user_repository.update(modifiedUser);

    res.status(OK).send();
});

usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await user_repository.removeUser(uuid);
    res.sendStatus(OK);
});

export default usersRoute;