import { ActionTypes } from "../constants";
import {listeningHighlightCorrectSummary} from "./listening-highlight-correct-summary";
import {listeningFillInTheBlanks} from "./listening-fill-in-the-blanks";
import {listeningWriteFromDictation} from "./listening-write-from-dictation";
import {listeningMultipleAnswers} from "./listening-multiple-answers";
import {listeningSingleAnswer} from "./listening-single-answer";
import {listeningSelectMissingWord} from "./listening-select-missing-word";
import {listeningSummarizeSpokenText} from "./listening-summarize-spoken-text";
import {listeningHighlightIncorrectWords} from "./listening-highlight-incorrect-words";

const initialState = {
  loading: false,
  listeningSelectMissingWord: [],
  listeningMultipleAnswers: [],
  listeningHighlightCorrectSummary: [],
  listeningWriteFromDictation: [],
  listeningHighlightIncorrectWords: [],
  listeningSummarizeSpokenText: [],
  listeningSingleAnswer: [],
  listeningFillInTheBlanks: [],
};

const listeningReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_LISTENING_SELECT_MISSING_WORD: {
      return {
        ...state,
        listeningSelectMissingWord: listeningSelectMissingWord
      }
    }
    case ActionTypes.GET_LISTENING_MULTIPLE_ANSWERS: {
      return {
        ...state,
        listeningMultipleAnswers: listeningMultipleAnswers
      }
    }
    case ActionTypes.GET_LISTENING_HIGHLIGHT_CORRECT_SUMMARY: {
      return {
        ...state,
        listeningHighlightCorrectSummary: listeningHighlightCorrectSummary
      }
    }
    case ActionTypes.GET_LISTENING_WRITE_FROM_DICTATION: {
      return {
        ...state,
        listeningWriteFromDictation: listeningWriteFromDictation
      }
    }
    case ActionTypes.GET_LISTENING_HIGHLIGHT_INCORRECT_WORDS: {
      return {
        ...state,
        listeningHighlightIncorrectWords: listeningHighlightIncorrectWords
      }
    }
    case ActionTypes.GET_LISTENING_SUMMARIZE_SPOKEN_TEXT: {
      return {
        ...state,
        listeningSummarizeSpokenText: listeningSummarizeSpokenText
      }
    }
    case ActionTypes.GET_LISTENING_SINGLE_ANSWER: {
      return {
        ...state,
        listeningSingleAnswer: listeningSingleAnswer
      }
    }
    case ActionTypes.GET_LISTENING_FILL_IN_THE_BLANKS: {
      return {
        ...state,
        listeningFillInTheBlanks: listeningFillInTheBlanks
      }
    }
    default:
      return state;
  }
};

export default listeningReducer;
