import {UserService} from './UserService'
import '@types/jest'
import '@types/node'
import { getMockUser } from '../__mocks__/mockUser';

jest.mock('../repositories/UsersRepository');
const mockUserRepository = require('../repositories/UsersRepository');


describe('UserService', () => {
    const mockUser = getMockUser();

    const userService = new UserService({
        userRepository: mockUserRepository,
        name: 'Algum Nome',
        email: 'email@gmail.com'
    });

    it('Deve retornar o usuário, quando for salvo', async () => {
        mockUserRepository.save = jest.fn().mockImplementation(() => {
            Promise.resolve(mockUser);
        })

        const user = await userService.createUser();
        expect(user).toHaveProperty('user_id');
        expect(user).toMatchObject({
            name: 'Algum Nome',
            email: 'email@gmail.com'
        })
    })
})