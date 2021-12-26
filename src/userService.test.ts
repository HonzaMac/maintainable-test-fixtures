import { updateUser } from "./userService"
import { createUser } from "../tests/helpers/createUser"

describe('UserService - updateUser', () => {
    it('should update department', () => {
        // GIVEN
        const user = createUser()
        const updateData = {
            department: 'IT Support',
        }
        // WHEN
        const currentUser = updateUser(user, updateData)

        // THEN
        expect(currentUser).toStrictEqual({
            id: 'e2f5a82a-3f2e-4b6d-b4d2-086afaa08f8a',
            username: 'john',
            email: 'john.doe@example.com',
            country: 'France',
            department: 'IT Support',
            divisionName: 'IT',
        })
    })

    it.todo('should not update on empty update');

    it.todo('should update divisionName');

})
