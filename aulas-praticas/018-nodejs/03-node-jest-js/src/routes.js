import { Router } from 'express';
import { usersController } from './controllers/usersController.js';

const routes = Router()
const { pegarUsuarios, criarUsuario } = usersController;

routes.get('/users', pegarUsuarios)

routes.post('/users', criarUsuario)

// GET - Ler dados
// POST - Criar dados
// PUT/PATCH - Editar dados
// DELETE - Deletar os dados



export { routes }