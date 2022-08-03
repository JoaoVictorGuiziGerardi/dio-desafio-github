import { UserRepository } from './UserRepository';
import getEntityManagerMock from '../__mocks__/getEntityManagerMock';
import { User } from '../entities/User';
import '@types/jest';
import { getMockUser } from '../__mocks__/mockUser';

describe('UserRepository', () => {
    const mockUser: User = getMockUser();

    it('Deve retornar o usuário salvo, quando chamar a funcao save', async () => {
        const managerMock = await getEntityManagerMock({
            saveReturn: mockUser
        });

        const userRepository = new UserRepository(managerMock);
        const user = await userRepository.save(mockUser);

        expect(user).toHaveProperty('user_id');
        expect(user).toMatchObject({
            name: 'Algum Nome',
            email: 'email@gmail.com'
        })
    })
})