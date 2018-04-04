import { combineReducers } from 'redux';

import {
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    SIGNOUT,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAIL
} from '../constants';


const isSignedIn = (state = false, {type}) => {
    switch (type) {
        case SIGNIN_SUCCESS:
            return true;
        case SIGNIN_FAIL:
        case SIGNOUT:
            return false;
        default:
            return state;
    }
};

const isLoading = (state = false, {type}) => {
    if(type.endsWith('_REQUEST')) return true;
    else if(type.endsWith('_SUCCESS') || type.endsWith('_FAIL')) return false;
    return state;
};

const products = (state = [], {type, products}) => {
    switch (type) {
        case FETCH_PRODUCTS_SUCCESS:
            return products;
        case FETCH_PRODUCTS_FAIL:
            return [];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    isSignedIn,
    isLoading,
    products
});

export default rootReducer;