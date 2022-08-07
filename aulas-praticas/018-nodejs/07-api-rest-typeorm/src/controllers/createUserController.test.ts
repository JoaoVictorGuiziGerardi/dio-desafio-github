import { Request } from 'express';
import { makeMockResponse } from '../utils/mockResponse';
import { CreateUserController } from './createUserController';
import createConnection from '../database';
import { getConnection } from 'typeorm';

describe('CreateUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();
        
        await connection.query('DELETE FROM usuarios');
        await connection.close();
    })
    
    const createUserController = new CreateUserController();
    const response = makeMockResponse();

    it('Deve retornar status 201 quando usuário for criado', async () => {
        const request = {
            body: {
                nome: 'Usuário',
                email: 'email@gmail.com'
            }
        } as Request;

        await createUserController.handle(request, response);
        expect(response.state.status).toBe(201);

    })

    it('Deve retornar status 400 quando o nome não for informado', async() => {
        const request = {
            body: {
                nome: '',
                email: 'email@gmail.com'
            }
        } as Request;

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(400);
    })

    it('Deve retornar status 201 quando o email não for informado', async() => {
        const request = {
            body: {
                nome: 'Usuário',
                email: ''
            }
        } as Request;

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(201);
    })
    
})