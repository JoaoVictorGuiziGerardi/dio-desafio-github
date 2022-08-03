import axios from 'axios';
import { userInfo } from 'os';

const server = axios.create({
    baseURL:'http://localhost:5001'
})

describe('/user', () => {
    it('Deve retornar o status 200', async () => {
        const user = await server.post('/user', {
            name: 'Algum Nome',
            email: 'email@gmail.com'
        })
        
        expect(user.status).toBe(201);
    });   
    
})