import {
    SIGNIN_FAIL,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    RESET_NOTIFICATION_MESSAGE,
    SIGNOUT,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL
} from '../constants';

export const signIn = (username, password) => ({
    type: SIGNIN_REQUEST,
    username,
    password
});

export const signInSuccess = (token) => ({
    type: SIGNIN_SUCCESS,
    token
});

export const signInFail = (error) => ({
    type: SIGNIN_FAIL,
    error
});

export const resetNotificationMessage = () => ({type: RESET_NOTIFICATION_MESSAGE});

export const signOut = () => ({type: SIGNOUT});

export const fetchProducts = () => ({type: FETCH_PRODUCTS_REQUEST});
export const fetchProductsSuccess = (products) => ({type: FETCH_PRODUCTS_SUCCESS, products});
export const fetchProductsFail = (error) => ({type: FETCH_PRODUCTS_FAIL, error});

export const createProduct = (product) => ({type: CREATE_PRODUCT_REQUEST, product});
export const createProductSuccess = (product) => ({type: CREATE_PRODUCT_SUCCESS, product});
export const createProductFail = (error) => ({type: CREATE_PRODUCT_FAIL, error});

export const deleteProduct = (product) => ({type: DELETE_PRODUCT_REQUEST, product});
export const deleteProductSuccess = (product) => ({type: DELETE_PRODUCT_SUCCESS, product});
export const deleteProductFail = (error) => ({type: DELETE_PRODUCT_FAIL, error});

export const updateProduct = (product) => ({type: UPDATE_PRODUCT_REQUEST, product});
export const updateProductSuccess = (product) => ({type: UPDATE_PRODUCT_SUCCESS, product});
export const updateProductFail = (error) => ({type: UPDATE_PRODUCT_FAIL, error});