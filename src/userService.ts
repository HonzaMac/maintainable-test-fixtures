export interface User {
    id: string;
    username: string;
    email: string;
    country: string;
    department: string;
    divisionName: string;
    city?: string;
}

export const updateUser = (user: User, updateData: Partial<User>): User => ({
    ...user,
    ...updateData,
});
