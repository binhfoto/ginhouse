module.exports = {
    logging: true,
    auth: true,
    seed: false,
    db: {
        url: process.env.MONGODB_URI
    }
};
