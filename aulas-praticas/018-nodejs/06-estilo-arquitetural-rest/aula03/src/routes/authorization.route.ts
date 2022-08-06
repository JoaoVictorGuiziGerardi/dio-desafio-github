import { NextFunction, Request, Response, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";
import JWT, { SignOptions } from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication.middleware";

const { OK } = StatusCodes;
const authorizationRoute = Router();

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    // Só retorna OK porque o token já vem validado do jwtAuthenticationMiddleware
    res.sendStatus(OK);
});

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {

    try {
        const user = req.user;

        if (!user) {
            throw new ForbiddenError('Usuário não informado!');
        }

        const jwtPayload = {username: user.username};
        const jwtOptions: SignOptions = {subject: user?.uuid, expiresIn: '15m'};
        const secretKey = 'my_secret_key';

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);
        
        res.status(OK).json({token: jwt });

    } catch (error) {
        next(error);
    }

});

export default authorizationRoute;