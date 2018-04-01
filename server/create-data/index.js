const logger = require('../util/logger');

const user = require('./user');
const product = require('./product');

const MODELS = [user.model, product.model];

const cleanDB = function() {
    logger.log('Mongo - Cleaning up DB');
    const cleanPromises = MODELS.map(function(model){
        return model.remove().exec();
    });
    return Promise.all(cleanPromises);
};

cleanDB() // pass data to next function
    .then(user.create)
    .then(product.create)
    // log fake data to console
    .then(logger.log.bind(logger))
