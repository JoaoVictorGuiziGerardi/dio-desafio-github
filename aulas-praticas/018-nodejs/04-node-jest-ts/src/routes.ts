import { Router } from 'express';
import { UsersController } from './controllers/usersController';

const routes = Router()
const usersController = new UsersController();

routes.get('/users', usersController.pegarUsuarios)

routes.post('/users', usersController.criarUsuario)

// GET - Ler dados
// POST - Criar dados
// PUT/PATCH - Editar dados
// DELETE - Deletar os dados



export { routes }