import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './RootReducer';
import RootSaga from './RootSaga';


const getStore = () => {
  const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(RootReducer, enhancers);
  sagaMiddleware.run(RootSaga);

  return store;
};

export default getStore();
