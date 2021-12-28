import * as faker from "faker"
import { User } from "../../src/userService"

export const createUser = (data: Partial<User> = {}) : User => {
    const fakeData: User = {
        id: faker.datatype.uuid(),
        username: faker.name.findName(),
        email: faker.internet.email(),
        country: faker.address.country(),
        department: faker.company.companyName(),
        divisionName: faker.name.jobArea(),
    }

    return {
        ...fakeData,
        ...data,
    }
};
