import { User } from "../../src/userService"

export const createUser = (data: Partial<User> = {}) => ({
    id: 'e2f5a82a-3f2e-4b6d-b4d2-086afaa08f8a',
    username: 'john',
    email: 'john.doe@example.com',
    country: 'France',
    department: 'IT Services',
    divisionName: 'IT',
    ...data,
});
