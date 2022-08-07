import { CreateUserService } from '../../services/CreateUserService';
import {v4 as uuid} from 'uuid';

class FakeData {
    createUserService = new CreateUserService();

    async execute() {
        await this.createUserService.execute({
            id: uuid(),
            nome: 'Usuário 1',
            email: 'usuario@mail.com'
        })

        await this.createUserService.execute({
            id: uuid(),
            nome: 'Usuário 2',
            email: ''
        })
        
    }

    async createUser() {
        const user = await this.createUserService.execute({
            id: uuid(),
            nome: 'Usuário 1',
            email: 'usuario@mail.com'
        })

        return user;
    }
}

export { FakeData };