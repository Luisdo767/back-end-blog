const router = require('express').Router()
const passport = require('passport')
require('../middleware/auth.middleware')(passport)

const postServices = require('./posts.http')

router.route('/posts')
    .post(passport.authenticate('jwt', {session: false}), postServices.create)
    .get(postServices.getAll)


router.route('/posts/:id')
    .get(postServices.getById)


router.route('/users/me/posts')
    .get(passport.authenticate('jwt', {session: false}), postServices.getByUser)


router.route('/users/me/posts/:id')
    .get(passport.authenticate('jwt', {session: false}), postServices.getByUser)
    .put(passport.authenticate('jwt', {session: false}), postServices.edit)
    .delete(passport.authenticate('jwt', {session: false}), postServices.remove)

module.exports = {
    router
}