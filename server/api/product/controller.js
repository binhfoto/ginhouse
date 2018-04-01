const { merge } = require('lodash');
const Model = require('./model.js');

module.exports = {

    params: (req, res, next, id) => {
        Model
            .findOne({ id })
            .exec()
            .then(
                product => {
                    if(!product){
                        next(new Error(`No product with id '${id}'`));
                    }
                    else {
                        req.product = product;
                        next();
                    }
                },
                next
            );
    },

    get: (req, res, next) => {
        Model
            .find({})
            .sort('-updated') // sort descending Created
            .exec()
            .then(products => {
                res.json({products});
            }, next);
    },

    getOne: (req, res, next) => {
        const product = req.product;
        if (product) {
            res.json({product});
        } else {
            next(new Error('This product is not valid'));
        }
    },

    post: (req, res, next) => {
        Model
            // 'create' event will trigger some mongoose middleware, such as preSave
            .create(req.body)
            .then(product => {
                res.json({product});
            }, next);
    },

    put: (req, res, next) => {
        const newProduct = req.body;
        let currentProduct = req.product;

        merge(currentProduct, newProduct);

        currentProduct.save((err, product) => {
            if (err) {
                next(err);
            } else {
                res.json({product});
            }
        });
    },

    delete: (req, res, next) => {
        const product = req.product;
        product.remove((err, product) => {
            if (err) {
                next(err);
            } else {
                res.json({product});
            }
        });
    }
};
