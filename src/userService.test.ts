import { updateUser } from "./userService"
import { createUser } from "../tests/helpers/createUser"
import * as faker from "faker"

describe('UserService - updateUser', () => {
    it('should update department', () => {
        // GIVEN
        const user = createUser()
        const updateData = {
            department: faker.company.companyName(),
        }
        // WHEN
        const currentUser = updateUser(user, updateData)

        // THEN
        expect(currentUser).toMatchObject({
            id: user.id,
            department: updateData.department,
        })
    })

    it.todo('should not update on empty update');

    it('should update divisionName', () => {
        // GIVEN
        const user = createUser()
        const updateData = {
            divisionName: faker.name.jobArea(),
        }
        // WHEN
        const currentUser = updateUser(user, updateData)

        // THEN
        expect(currentUser).toMatchObject({
            id: user.id,
            divisionName: updateData.divisionName,
        })
    });
})
