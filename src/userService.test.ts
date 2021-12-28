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
        expect(currentUser).toMatchObject({
            id: user.id,
            department: 'IT Support',
        })
    })

    it.todo('should not update on empty update');

    it('should update divisionName', () => {
        // GIVEN
        const user = createUser({
            divisionName: "ICT",
        })
        const updateData = {
            divisionName: 'IT',
        }
        // WHEN
        const currentUser = updateUser(user, updateData)

        // THEN
        expect(currentUser).toMatchObject({
            id: user.id,
            divisionName: 'IT',
        })
    });
})
