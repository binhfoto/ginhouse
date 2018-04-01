import axios from 'axios';
import Token from './token';

const getEndPoint = (endpoint) => [ ADMIN_API_URL, endpoint ].join('');
const withAuthHeader = (token) => {
    return {
        'Authorization': `${token}`
    };
};

const Api = {
    signIn: (username, password) => {
        const endpoint = getEndPoint('/auth/signin');
        return axios
            .post(endpoint, { username, password })
            .then(response => ({ token: response.data.token }))
            .catch(response => ({ error: response.response.data }));
    },

    fetchProducts: () => {
        const endpoint = getEndPoint(`/api/products`);
        return axios
            .get(endpoint)
            .then(response => ({ products: response.data.products }))
            .catch(response => ({ error: response.response.data }));
    },

    createProduct: (product) => {
        const endpoint = getEndPoint(`/api/products`);
        return axios
            .post(endpoint, product, {
                headers: withAuthHeader(Token.get())
            })
            .then(response => ({ product: response.data.product }))
            .catch(response => ({ error: response.response.data }));
    },

    updateProduct: (product) => {
        const endpoint = getEndPoint(`/api/products/${product._id}`);
        return axios
            .put(endpoint, product, {
                headers: withAuthHeader(Token.get())
            })
            .then(response => ({ product: response.data.product }))
            .catch(response => ({ error: response.response.data }));
    },

    deleteProduct: (product) => {
        const endpoint = getEndPoint(`/api/products/${product._id}`);
        return axios
            .delete(endpoint, {
                headers: withAuthHeader(Token.get())
            })
            .then(response => ({ product: response.data.product }))
            .catch(response => ({ error: response.response.data }));
    }
};

export default Api;