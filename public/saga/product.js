import { call, put, takeEvery } from "redux-saga/effects";
import Api from "../service/api";

import {
    FETCH_PRODUCTS_REQUEST,
    CREATE_PRODUCT_REQUEST,
    DELETE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_REQUEST,
} from '../constants';

import {
    fetchProductsSuccess,
    fetchProductsFail,
    createProductSuccess,
    createProductFail,
    deleteProductSuccess,
    deleteProductFail,
    updateProductSuccess,
    updateProductFail
} from '../action';


/******************************** FETCH PRODUCTS SAGA ********************************/
function * watchFetchProducts () {
    const {product, error} = yield call(Api.fetchProducts);
    if (product) {
        yield put(fetchProductsSuccess(product));
    } else {
        yield put(fetchProductsFail(error));
    }
}

function * fetchProducts () {
    yield takeEvery(FETCH_PRODUCTS_REQUEST, watchFetchProducts);
}

/******************************** CREATE PRODUCT SAGA ********************************/
function * watchCreateProduct (action) {
    const {product, error} = yield call(Api.createProduct, action.product);
    if (product) {
        yield put(createProductSuccess(product));
    } else {
        yield put(createProductFail(error));
    }
}

function * createProduct () {
    yield takeEvery(CREATE_PRODUCT_REQUEST, watchCreateProduct);
}

/******************************** DELETE PRODUCT SAGA ********************************/
function * watchDeleteProduct (action) {
    const {product, error} = yield call(Api.deleteProduct, action.product);
    if (product) {
        yield put(deleteProductSuccess(product));
    } else {
        yield put(deleteProductFail(error));
    }
}

function * deleteProduct () {
    yield takeEvery(DELETE_PRODUCT_REQUEST, watchDeleteProduct);
}

/******************************** EDIT PRODUCT SAGA ********************************/
function * watchUpdateProduct (action) {
    const {product, error} = yield call(Api.updateProduct, action.product);
    if (product) {
        yield put(updateProductSuccess(product));
    } else {
        yield put(updateProductFail(error));
    }
}

function * updateProduct () {
    yield takeEvery(UPDATE_PRODUCT_REQUEST, watchUpdateProduct);
}

export default {
    fetchProducts,
    createProduct,
    deleteProduct,
    updateProduct
};