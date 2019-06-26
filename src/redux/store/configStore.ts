import Taro from '@tarojs/taro';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas/index';
// import apiMiddleware from '../middlewares/apiMiddleware'
import sagaPromiseMiddleware from '../middlewares/sagaPromiseMiddleware';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaPromiseMiddleware, sagaMiddleware];

// 防止saga由于未捕捉异常而挂掉
function runSaga() {
    try {
        sagaMiddleware.run(rootSaga);
    } catch (err) {
        runSaga();
        throw err;
    }
}

export default function configStore(initialState = {}) {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
        middlewares.push(createLogger());
    }

    const composeEnhancers = (window && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;
    const enhancers = composeEnhancers(applyMiddleware(...middlewares));

    const store = createStore(rootReducer, initialState, enhancers);
    runSaga();
    return store;
}
