import { ActionTypes } from "../constants";
import {writingWriteEssay} from "./writing-write-essay";
import {writingSummarizeWrittenText} from "./writing-summarize-written-text";

const initialState = {
  loading: false,
  writingSummarizeWrittenText: [],
  writingWriteEssay: [],
};

const writingReducer = (state = initialState, action) => {
  switch (action.type) {
    //WRITING
    case ActionTypes.GET_WRITING_WRITE_ESSAY: {
      return {
        ...state,
        writingWriteEssay: writingWriteEssay
      }
    }
    case ActionTypes.GET_WRITING_SUMMARIZE_WRITTEN_TEXT: {
      return {
        ...state,
        writingSummarizeWrittenText: writingSummarizeWrittenText
      }
    }
    default:
      return state;
  }
};

export default writingReducer;
