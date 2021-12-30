import { InferType, object, string } from "yup"

export const userSchema = object({
    id: string().uuid(),
    username: string().min(1).required(),
    email: string().email().required(),
    country: string().min(1).required(),
    department: string().min(1).required(),
    divisionName: string().min(1).required(),
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
