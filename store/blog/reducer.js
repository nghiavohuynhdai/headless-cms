import { ActionTypes } from "./constants";

const initialState = {
  loading: false,
  blogDisplay: [],
  blogPagination: [],
  blogBySlug: {},
  newTag: {},
  newFile: {},
  files: [],
  blogByTag: [],
  justDeleted: false,
  tagPagination: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_POST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        blogDisplay: action.payload,
        blogPagination: {
          total: action.payload.length,
          pageSize: 10,
          page: 1,
        },
      };
    case ActionTypes.GET_POST_BY_SLUG:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_POST_BY_SLUG_SUCCESS:
      return {
        ...state,
        loading: false,
        blogBySlug: action.payload,
      };
    case ActionTypes.POST_TAG_SUCCESS:
      return {
        ...state,
        newTag: action.payload.data,
      };
    case ActionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        justDeleted: !state.justDeleted,
      };
    case ActionTypes.UPDATE_POST_SUCCESS:
      return {
        ...state,
        blogBySlug: action.payload,
      };
    case ActionTypes.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        newFile: action.payload,
      };
    case ActionTypes.GET_POST_BY_TAG:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.GET_POST_BY_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        blogByTag: action.payload,
        tagPagination: {
          total: action.payload.posts.length,
          pageSize: 10,
          page: 1,
        },
      };

    default:
      return state;
  }
};

export default reducer;
