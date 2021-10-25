import { ActionTypes } from "../constants";
import {readingFillInTheBlanks} from "./reading-fill-in-the-blanks";
import {readingReOrderParagraph} from "./reading-reorder-paragraph"
import {readingSingleAnswer} from "./reading-single-answer";
import {readingMultipleAnswers} from "./reading-multiple-answers";
import {readingFillInTheBlanksDropDown} from "./reading-fill-in-the-blanks-dropdown";

const initialState = {
  loading: false,
  readingFillInTheBlanks: [],
  readingReOrderParagraph: [],
  readingMultipleAnswers: [],
  readingSingleAnswer: [],
  readingFillInTheBlanksDropDown: [],
};

const readingReducer = (state = initialState, action) => {
  switch (action.type) {
    //READING
    case ActionTypes.GET_READING_FILL_IN_THE_BLANKS:
      return {
        ...state,
        readingFillInTheBlanks: readingFillInTheBlanks,
      };
    case ActionTypes.GET_READING_REORDER_PARAGRAPH: {
      return {
        ...state,
        readingReOrderParagraph: readingReOrderParagraph
      }
    }
    case ActionTypes.GET_READING_SINGLE_ANSWER: {
      return {
        ...state,
        readingSingleAnswer: readingSingleAnswer
      }
    }
    case ActionTypes.GET_READING_FILL_IN_THE_BLANKS_DROP_DOWN: {
      return {
        ...state,
        readingFillInTheBlanksDropDown: readingFillInTheBlanksDropDown
      }
    }
    case ActionTypes.GET_READING_MULTIPLE_ANSWERS: {
      return {
        ...state,
        readingMultipleAnswers: readingMultipleAnswers
      }
    }
    default:
      return state;
  }
};

export default readingReducer;
