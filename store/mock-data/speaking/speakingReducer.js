import { ActionTypes } from "../constants";
import {speakingReadAloud} from "./speaking-read-aloud";
import {speakingRetellLecture} from "./speaking-retell-lecture";
import {speakingRepeatSentence} from "./speaking-repeat.sentence";
import {speakingDescribeImage} from "./speaking-describe-image";
import {speakingAnswerShortQuestion} from "./speaking-answer-short-question";

const initialState = {
  loading: false,
  speakingReadAloud: [],
  speakingRetellLecture: [],
  speakingRepeatSentence: [],
  speakingDescribeImage: [],
  speakingAnswerShortQuestion: [],
};

const speakingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SPEAKING_READ_ALOUD: {
      return {
        ...state,
        speakingReadAloud: speakingReadAloud
      }
    }
    case ActionTypes.GET_SPEAKING_RETELL_LECTURE: {
      return {
        ...state,
        speakingRetellLecture: speakingRetellLecture
      }
    }
    case ActionTypes.GET_SPEAKING_REPEAT_SENTENCE: {
      return {
        ...state,
        speakingRepeatSentence: speakingRepeatSentence
      }
    }
    case ActionTypes.GET_SPEAKING_DESCRIBE_IMAGE: {
      return {
        ...state,
        speakingDescribeImage: speakingDescribeImage
      }
    }
    case ActionTypes.GET_SPEAKING_ANSWER_SHORT_QUESTION: {
      return {
        ...state,
        speakingAnswerShortQuestion: speakingAnswerShortQuestion
      }
    }
    default:
      return state;
  }
};

export default speakingReducer;
