import blogSaga from './blog/sagas';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  try {
    yield all([...blogSaga]);
  } catch (err) {
    // console.log('error caught in rootsaga');
  }
}
