const chai = require("chai");
const { describe, it } = require("mocha");
const chaiHttp = require('chai-http')

const app = require('../../app')

chai.use(chaiHttp)

describe('Suite de test de integracion de Usuarios', () => {
    it('Should return 204 when I delete my own user with my credentials', (done) => {
        chai.request(app)
            .delete('/api/v1/users/me')
            .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0Y2Q2MDExLTdlNzYtNGQ2ZC1iMjViLTFkNmU0MTgyZWMyZiIsImVtYWlsIjoic2FoaWQua2lja0BhY2FkZW1sby5jb20iLCJyb2wiOiJub3JtYWwiLCJpYXQiOjE2NjEzMDg2OTh9.kdymRdJTQ490Rfkx5fozKNXM9oQlHOR6CBVvqLzb3vQ')
            .end((err, res) => {
                chai.assert.equal(res.status, 204)
                done()
            })
    })
    it('')
})

