import { Router, NextFunction, Request, Response } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

// Rota de entrada da aplicação
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.json({mensagem: "salve tropa"})
})

router.post('/usuarios', createUserController.handle);
router.get('/usuarios', getAllUserController.handle);
router.put('/usuario', updateUserController.handle);
router.delete('/usuario/:id', deleteUserController.handle);

export { router };