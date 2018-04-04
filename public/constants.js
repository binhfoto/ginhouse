// route
export const HOME_ROUTE = '/';
export const SIGN_IN_ROUTE = '/signin';
export const PRODUCT_MANAGEMENT_ROUTE = '/productmgmt';
export const PRODUCT_DETAIL_ROUTE = id => `/product/${id}`;

// action
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL    = 'SIGNIN_FAIL';

export const RESET_NOTIFICATION_MESSAGE = 'RESET_NOTIFICATION_MESSAGE';

export const SIGNOUT = 'SIGNOUT';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL    = 'FETCH_PRODUCTS_FAIL';

export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAIL    = 'CREATE_PRODUCT_FAIL';

export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAIL    = 'DELETE_PRODUCT_FAIL';

export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAIL    = 'UPDATE_PRODUCT_FAIL';

