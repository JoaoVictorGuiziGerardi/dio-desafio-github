import express from 'express';
import { routes } from './routes.js';

const server = express();
const port = 5000;

server.use(express.json());
server.use(routes);

server.listen(port, () => {
    console.log(`Servidor on na porta ${port}`)
})