import { Request, Response } from "express";
import { database } from "../database";

export class UsersController {
    criarUsuario (req: Request, res: Response):Response {
        const { name } = req.body;
    
        if (name.length < 1){
            return res.status(403).json({'mensagem': `Não é possível criar um usuário sem um nome`});
        }
        
        database.push(name);
        return res.status(201).json({'mensagem': `Usuário ${name} criado!`});

    }

    pegarUsuarios (req: Request, res: Response):Response {
        return res.status(200).json(database); 
    }
}