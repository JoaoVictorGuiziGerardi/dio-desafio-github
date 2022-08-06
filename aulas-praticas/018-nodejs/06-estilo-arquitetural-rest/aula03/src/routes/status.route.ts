import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const statusRoute = Router();

const { OK } = StatusCodes;

statusRoute.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(OK);
})

export default statusRoute;