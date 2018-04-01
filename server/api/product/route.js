const router = require('express').Router();
const controller = require('./controller.js');

const auth = require('../../auth/auth');
const config = require('../../config');

const shouldAuthenticate = config.auth === false ? [] : [auth.decodeToken()];

router.param('id', controller.params);

router.route('/')
    .get(controller.get)
    .post(shouldAuthenticate, controller.post);

router.route('/:id')
    .get(controller.getOne)
    .put(shouldAuthenticate, controller.put)
    .delete(shouldAuthenticate, controller.delete);;

module.exports = router;