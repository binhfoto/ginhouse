import { all, call} from 'redux-saga/effects';

import ProductSaga from './product';
import SignInSaga from './signIn';

/******************************** ROOT SAGA ********************************/
export default function* () {
    yield all([
        call(ProductSaga.watchFetchProducts), // fetch at first time
        SignInSaga.signIn(),
        ProductSaga.fetchProducts(),
        ProductSaga.createProduct(),
        ProductSaga.deleteProduct(),
        ProductSaga.updateProduct()
    ]);
};