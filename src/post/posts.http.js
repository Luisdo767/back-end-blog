const postControllers = require('./posts.controller')


const getAll = (req, res) => {
    const data = postControllers.getAllPost()
    res.status(200).json({
        items: data.length,
        users: data,
    })
}


const getById = (req, res) => {
    const id = req.params.id
    const data = postControllers.getPostById(id)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({message: `El post con el id ${id} no existe`})
    }
}


const getByUser = (req, res) => {
    const userId = req.user.id
    if(req.params.id) {
        const postId = req.params.id
        var data = postControllers.getPostByUser(userId, postId)
    } else {
        var data = postControllers.getPostsByUser(userId)
    }

    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({message: `El post no existe o no pertenece al usuario`})
    }
}


const create = (req, res) => {
    const data = req.body
    if(!data){
        return res.status(400).json({message: 'Miising Data'})
    }
    if(
        !data.title ||
        !data.content ||
        !data.header_image ||
        !data.user_id ||
        !data.published
    ){
        return res.status(400).json({
            message: 'All fields must be completed', 
            fields: {
                "id": "uuid",
                "title": "string",
                "content":"string",
                "header_image": "url_to_img",
                "user_id": "uuid",
                "published": true
            }})
    } else {
        const response = postControllers.createPost(data)
        return res.status(201).json({message: `Post created succesfully with id: ${response.id}`})
    }
}


const edit = (req, res) => {
    const id = req.params.id 
    const data = req.body
    if(!Object.keys(data).length){
        return res.status(400).json({message: 'Missing Data'})
    } else if (
        !data.title ||
        !data.content ||
        !data.header_image ||
        !data.user_id ||
        !data.published
    ){
        return res.status(400).json({
                message: 'All fields must be completed', 
                fields: {
                    "id": "uuid",
                    "title": "string",
                    "content":"string",
                    "header_image": "url_to_img",
                    "user_id": "uuid",
                    "published": true
            }})
    } else {
        const response = postControllers.editPost(id, data)
        return res.status(200).json({message: 'Post edited Succesfully', post: response})
    }
}


const remove = (req, res) => {
    const id = req.params.id
    const data = postControllers.deletePost(id)
    if(data){
        return res.status(204).json()
    } else {
        return res.status(400).json({message: 'Invalid ID'})
    }
}


const getMypost = (req, res) => {

}



module.exports = {
    getAll,
    getById,
    getByUser,
    create,
    edit,
    remove
}