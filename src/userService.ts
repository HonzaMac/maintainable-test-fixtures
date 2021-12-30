import { InferType, object, string } from "yup"

export const userSchema = object({
    id: string().uuid(),
    username: string().required(),
    email: string().email().required(),
    country: string().required(),
    department: string().required(),
    divisionName: string().required(),
    city: string().optional(),
}).required();

type UserSchema = InferType<typeof userSchema>;
export type User = UserSchema;

export const updateUser = (user: User, updateData: Partial<User>): User => {
  const validUser = userSchema.validateSync(user)

    return {
    ...validUser,
    ...updateData,
}};
