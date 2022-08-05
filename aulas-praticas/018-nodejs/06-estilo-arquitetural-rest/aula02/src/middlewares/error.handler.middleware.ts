import { NextFunction, Request, Response } from "express";
import DatabaseError from '../models/database.error.model';
import { StatusCodes } from 'http-status-codes';

const { INTERNAL_SERVER_ERROR, BAD_REQUEST } = StatusCodes;

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof DatabaseError){
        res.sendStatus(BAD_REQUEST);
    } else {
        res.sendStatus(INTERNAL_SERVER_ERROR);
    }
}

export default errorHandler;