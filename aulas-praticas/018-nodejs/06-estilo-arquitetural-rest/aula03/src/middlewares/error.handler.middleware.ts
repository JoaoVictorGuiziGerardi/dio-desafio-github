import { NextFunction, Request, Response } from "express";
import DatabaseError from '../models/errors/database.error.model';
import { StatusCodes } from 'http-status-codes';
import ForbiddenError from "../models/errors/forbidden.error.model";

const { INTERNAL_SERVER_ERROR, BAD_REQUEST, FORBIDDEN } = StatusCodes;

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof DatabaseError){
        res.sendStatus(BAD_REQUEST);
    } else if (error instanceof ForbiddenError) {
        res.sendStatus(FORBIDDEN);
    } 
    else {
        res.sendStatus(INTERNAL_SERVER_ERROR);
    }
}

export default errorHandler;