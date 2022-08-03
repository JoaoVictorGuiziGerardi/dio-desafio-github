import { User } from "../entities/User";
import { v4 as uuid } from "uuid";

export const getMockUser = (): User =>({
    user_id: uuid(),
    name: 'Algum Nome',
    email: 'email@gmail.com'
})