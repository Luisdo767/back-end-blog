const uuid = require('uuid')
const crypt = require('../utils/crypt')

const userDB = [{
    "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    "first_name": "Sahid",
    "last_name": "Kick",
    "email": "sahid.kick@academlo.com",
    "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    "phone": "1234567890",
    "birthday_date": "22/10/2000",
    "rol": "normal",
    "profile_image": "",
    "country": "mexico",
    "is_active": true,
    "verified": false
}, {
    "id": "9f3c8907-37d0-45d6-8421-13dfbe1fd98d",
    "first_name": "Luis",
    "last_name": "David",
    "email": "luis.david@academlo.com",
    "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    "phone": "1234567890",
    "birthday_date": "22/10/2000",
    "rol": "normal",
    "profile_image": "",
    "country": "colombia",
    "is_active": true,
    "verified": false
}]


const getAllUsers = () => {
    return userDB
    //? select * from users;
}


const getUserById = (id) => {
    const data = userDB.filter(item => item.id == id)
    return data.length ? data[0] : false
    //? select * from users where id = ${id};
}


const createUser = (data) => {
    const newUser = {
        id: uuid.v4(), //obligatorio
        first_name: data.first_name, //obligatorio
        last_name: data.last_name, //obligatorio
        email: data.email, //obligatorio y ubico
        password: crypt.hashPassword(data.password), //obligatorio
        phone: data.phone ? data.phone: '', //unico
        birthday_date: data.birthday_date, //obligatorio
        rol: 'normal', //obligatorio y por defecto "normal"
        profile_image: data.profile_image ? data.profile_image: '',
        country: data.country, //obligatorio
        is_active: true, //obligatorio y por defecto true
        verified: false //obligatorio y por defecto false

    }
    userDB.push(newUser)
    return newUser
}


const editUser = (id, data) => {
    const index = userDB.findIndex(item => item.id === id)
    if(index !== -1){
        userDB[index] = {
            id: id,
            first_name: data.first_name,
            last_name: data.last_name, 
            email: data.email,
            password: userDB[index].password,
            phone: data.phone, 
            birthday_date: data.birthday_date, 
            rol: data.rol, 
            profile_image: data.profile_image,
            country: data.country, 
            is_active: data.is_active, 
            verified: false 
        }
        return userDB[index]
    } else {
        return createUser(data)
    }
}


const deleteUser = (id) => {
    const index = userDB.findIndex(user => user.id === id)
    if (index !== -1) {
    userDB.splice(index, 1)
    return true
    } else {
    return false
    } 
}


const getUserByEmail = (email) => {
    const data = userDB.filter(item => item.email == email)
    return data.length ? data[0] : false
    //? select * from users where email = ${email};
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser,
    getUserByEmail
}