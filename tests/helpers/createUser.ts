import { User, userSchema } from "../../src/userService"
import { fake } from "yup-schema-faker"

export const createUser = (data: Partial<User> = {}): User => {
    const fakeSchemaData = fake(userSchema.noUnknown()) as User;
    console.log(fakeSchemaData);

    return {
        ...fakeSchemaData,
        ...data,
    }
};
