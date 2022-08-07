import express from "express";
import { router } from "./routes";
import 'reflect-metadata';
import createConnection from './database';

createConnection();
const server = express();
const port = 5000;

server.use(express.json());
server.use(router);

server.listen(port, () => {
    console.log(`Servidor on na porta 5000 http://localhost:${port}`);
})

