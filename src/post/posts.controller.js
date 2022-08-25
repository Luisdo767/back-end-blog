const uuid = require('uuid')



const postDB = [
    {
        "id": "ad52a733-5126-480a-84c7-0dd305e0d8bc",
        "title": "Trabajo",
        "content":"codigo",
        "header_image": "url_to_img",
        "user_id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",//Aqui hara referencia al usuario de tu userDB
        "published": true
    }, {
        "id": "4a3e7b01-ceeb-4a9f-b821-01a146ef6f38",
        "title": "Perro",
        "content":"cachorro",
        "header_image": "url_to_img",
        "user_id": "9f3c8907-37d0-45d6-8421-13dfbe1fd98d",//Aqui hara referencia al usuario de tu userDB
        "published": true
    }, {
        "id": "1d425998-ac21-4342-97ab-5a1a28c09605",
        "title": "Comida",
        "content":"restaurante",
        "header_image": "url_to_img",
        "user_id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",//Aqui hara referencia al usuario de tu userDB
        "published": true
    }
]


const getAllPost = () => {
    return postDB
}

const getPostsByUser = (userId) => {
    const data = postDB.filter(item => item.user_id == userId)
    return data.length ? data : false
}

const getPostByUser = (userId, postId) => {
    const data = postDB.filter(item => item.user_id == userId)
    if(data.length) {
        post = data.filter(item => item.id === postId)
        if(post.length) {
            return post[0]
        } else {
            return false
        }
    } else {
        return false
    }
}


const getPostById = (id) => {
    const data = postDB.filter(item => item.id == id)
    return data.length ? data[0] : false
}


const createPost = (data) => {
    const newPost = {
        "id": uuid.v4(),
        "title": data.title,
        "content": data.content,
        "header_image": data.header_image,
        "user_id": data.user_id,
        "published": true
    }

    postDB.push(newPost)
    return newPost
}


const editPost = (id, data) => {
    const index = postDB.findIndex(item => item.id === id)
    if(index !== -1){
        postDB[index] = {
            "id": id,
            "title": data.title,
            "content": data.content,
            "header_image": data.header_image,
            "user_id": data.user_id,
            "published": true
        }
        return postDB[index]
    } else {
        return createUser(data)
    }
}


const deletePost = (id) => {
    const index = postDB.findIndex(post => post.id === id)
    if (index !== -1) {
        postDB.splice(index, 1)
        return true
    } else {
        return false
    } 
}



module.exports = {
    getAllPost,
    getPostById,
    getPostsByUser,
    getPostByUser,
    createPost,
    editPost,
    deletePost
}
