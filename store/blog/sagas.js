import {
  call,
  fork,
  takeLatest,
  put,
  select,
  takeEvery,
} from "redux-saga/effects";
import ActionTypes from "./constants";
import {
  getPosts,
  getPostBySlug,
  postTag,
  getPostByTag,
  deletePostById,
  uploadFile,
  getStores,
  updatePostService,
} from "./service";

 function* fetchPost(action) {
  const failureAction = ActionTypes.GET_POST_FAILED;

  const json = yield call(getPosts, action.payload);
  if (json && json.status === 200) {
    yield put({
      type: ActionTypes.GET_POST_SUCCESS,
      payload: json.data,
    });
  }
}

function* fetchPostBySlug(action) {
  const failureAction = ActionTypes.GET_POST_BY_SLUG_FAILED;
  const slug = action.payload.slug;
  const json = yield call(getPostBySlug, slug);
  if (json && json.status === 200) {
    yield put({
      type: ActionTypes.GET_POST_BY_SLUG_SUCCESS,
      payload: json.data,
    });
  }
}

function* fetchPostByTag(action) {
  const failureAction = ActionTypes.GET_POST_BY_TAG_FAILED;
  const tag = action.payload.tag;
  const json = yield call(getPostByTag, tag);
  if (json && json.status === 200) {
    yield put({
      type: ActionTypes.GET_POST_BY_TAG_SUCCESS,
      payload: json.data,
    });
  }
}

function* addNewTag(action) {
  const failureAction = ActionTypes.POST_TAG_FAILED;

  const json = yield call(postTag, action.payload);
  if (json && json.status === 200) {
    yield put({
      type: ActionTypes.POST_TAG_SUCCESS,
      payload: json.data,
    });
  }
}

function* deletePost(action) {
  // const failureAction = ActionTypes.DELETE_POST_FAILED;
  const id = action.payload.id;
  const json = yield call(deletePostById, id);
  if (json && json.status === 200) {
    yield put({
      type: ActionTypes.DELETE_POST_SUCCESS,
      payload: json.data,
    });
  }
}

function* putPost(action) {
  const json = yield call(updatePostService, action.payload);
  if (json) {
    yield put({
      type: ActionTypes.UPDATE_POST_SUCCESS,
      payload: json.data,
    });
  }
}

function* addFile(action) {
  const json = yield call(uploadFile, action.payload);
  if (json && json.status === 200) {
    yield put({
      type: ActionTypes.UPLOAD_FILE_SUCCESS,
      payload: json.data,
    });
  }
}

function* watchRequests() {
  yield takeLatest(ActionTypes.GET_POST, fetchPost);
  yield takeLatest(ActionTypes.GET_POST_BY_SLUG, fetchPostBySlug);
  yield takeLatest(ActionTypes.POST_TAG, addNewTag);
  yield takeLatest(ActionTypes.DELETE_POST, deletePost);
  yield takeLatest(ActionTypes.UPLOAD_FILE, addFile);
  yield takeLatest(ActionTypes.GET_POST_BY_TAG, fetchPostByTag);
  yield takeLatest(ActionTypes.UPDATE_POST, putPost);
}

const sagas = [fork(watchRequests)];

export default sagas;
