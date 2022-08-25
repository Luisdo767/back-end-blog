//* Dependencias 
const express = require('express')
const passport = require('passport')
require('./middleware/auth.middleware')(passport)

//* Archivos de rutas 
const userRouter = require('./users/users.routes').router
const authRouter = require('./auth/auth.routes').router
const postRouter = require('./post/posts.routes').router

//* Configuraciones iniciales
const app = express()

//? Esta configuracion es para habilitar el req.body
app.use(express.json())


app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1', postRouter)



app.get('/ejemplo', 
    passport.authenticate('jwt', {session: false}) ,
    (req, res) => {
        res.status(200).json({message: "Felicidades tienes credenciales para entr a aquí", email: req.user.email})
})

app.listen(8000, () => {
    console.log('Server started at port: 8000');
})



module.exports = app