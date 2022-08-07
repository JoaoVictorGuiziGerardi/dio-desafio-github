import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Usuario } from "../entities/usuario";

interface IUser {
    id: string;
}

class DeleteUserService {
    async execute({id}: IUser) {
        const user = await getRepository(Usuario)
            .createQueryBuilder()
            .delete()
            .from(Usuario)
            .where('id = :id', { id })
            .execute()
        
            console.log(user);
            return user.raw;
    }
}

export { DeleteUserService };