import { ActionTypes } from "./constants";

export const getPost = (payload) => ({
  type: ActionTypes.GET_POST,
  payload,
});

export const getPostBySlug = (slug) => ({
  type: ActionTypes.GET_POST_BY_SLUG,
  payload: { slug: slug },
});

export const postTag = (payload) => ({
  type: ActionTypes.POST_TAG,
  payload,
});

export const updatePost = (payload) => ({
  type: ActionTypes.UPDATE_POST,
  payload,
});

export const deletePostById = (id) => ({
  type: ActionTypes.DELETE_POST,
  payload: { id: id },
});

export const uploadFile = (payload) => ({
  type: ActionTypes.UPLOAD_FILE,
  payload,
});
export const getPostByTag = (tag) => ({
  type: ActionTypes.GET_POST_BY_TAG,
  payload: { tag: tag },
});
