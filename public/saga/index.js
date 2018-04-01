import { all } from 'redux-saga/effects';

import ProductSaga from './product';
import SignInSaga from './signIn';

/******************************** ROOT SAGA ********************************/
export default function* () {
    yield all([
        SignInSaga.signIn(),
        ProductSaga.fetchProducts(),
        ProductSaga.createProduct(),
        ProductSaga.deleteProduct(),
        ProductSaga.updateProduct()
    ]);
};