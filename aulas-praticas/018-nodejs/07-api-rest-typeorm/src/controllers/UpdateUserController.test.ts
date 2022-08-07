import { UpdateUserController } from "./UpdateUserController";
import { getConnection } from "typeorm";
import createConnection from '../database';
import { FakeData } from "../utils/fakeData/fakeData";
import { makeMockResponse } from '../utils/mockResponse';
import { Request } from 'express';

describe('UpdateUserController', () => {
    beforeAll(async() => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM usuarios');
        await connection.close();
    })

    const fakeData = new FakeData();
    
    it('Deve retornar status 204 quando usuário for editado', async () => {
        const updateUserController = new UpdateUserController();

        const mockUser = await fakeData.createUser();

        const request = {
            body: {
                id: mockUser.id,
                nome: 'Nome Atualizado',
                email: 'email@email.com'
            }
        } as Request;
        
        const response = makeMockResponse();

        await updateUserController.handle(request, response);

        expect(response.state.status).toBe(204);
    })
})