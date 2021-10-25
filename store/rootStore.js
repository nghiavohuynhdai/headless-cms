import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import {createWrapper} from 'next-redux-wrapper';
import logger from 'redux-logger';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const makeStore = context => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

const wrapper = createWrapper(makeStore)

export default wrapper;