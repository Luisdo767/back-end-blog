const { assert } = require("chai");
const { describe, it } = require("mocha");

const userControllers = require('../users.controllers')

describe('Test unitario de mis usuarios', () => {
    it('Should return new user when I send correct data', (done) => {
        const body = {
            first_name: "Usuario de test",
            last_name: "Tester",
            email: "test@academlo.com",
            password: "1234",
            phone: "1234567890",
            birthday_date: "22/10/2000",
            country: "mexico",
        }
        const data = userControllers.createUser(body)
        assert.equal(data.first_name, body.first_name)
        assert.equal(data.rol, 'normal')
        assert.notEqual(data.password, body.password)
        assert.equal(data.profile_image, '')
        done()
    })
    it('Should return new user when I send correct data', (done) => {
        const body = {
            first_name: "Usuario de test",
            last_name: "Tester",
            email: "test@academlo.com",
            password: "1234",
            phone: "1234567890",
            birthday_date: "22/10/2000",
            country: "mexico",
            profile_image: 'asd'
        }
        const data = userControllers.createUser(body)
        assert.equal(data.first_name, body.first_name)
        assert.equal(data.rol, 'normal')
        assert.notEqual(data.password, body.password)
        assert.equal(data.profile_image, 'asd')
        assert.typeOf(data.id, 'string')
        assert.property(data, 'is_active')
        done()
    })
})


