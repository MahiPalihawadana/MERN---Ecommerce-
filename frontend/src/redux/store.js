import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducesrs
import {cartReducer } from './reducers/cartReducers';
import {getProductDetailsReducer, getProducts} from './reducers/productReducers';

const reducer = combineReducers({
    cart : cartReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;