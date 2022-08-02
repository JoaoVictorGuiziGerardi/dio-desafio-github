import { UsersController } from "./usersController";
import { Request } from 'express';
import { makeMockResponse } from "../mocks/mockResponse";

describe('Users Controller', () => {
    const usersController = new UsersController();

    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse();

    it("Deve listar os usuários", () => {
        usersController.pegarUsuarios(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toHaveLength(4);
    })

    it("Dev criar um novo usuário", () => {
        mockRequest.body = {
            name: 'Novo usuário'
        }
        usersController.criarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário Novo usuário criado!`})
    })

    it("Não deve criar usuário com nome em branco", () => {
        mockRequest.body = {
            name: ''
        }
        usersController.criarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(403);
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Não é possível criar um usuário sem um nome`})
    })
})