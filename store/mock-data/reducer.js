// import { ActionTypes } from "./constants";
// //READING
// import {readingFillInTheBlanks} from "./reading/reading-fill-in-the-blanks";
// import {readingReOrderParagraph} from "./reading/reading-reorder-paragraph"
// import {readingSingleAnswer} from "./reading/reading-single-answer";
// import {readingMultipleAnswers} from "./reading/reading-multiple-answers";
// import {readingFillInTheBlanksDropDown} from "./reading/reading-fill-in-the-blanks-dropdown";
// //LISTENING
// import {listeningHighlightCorrectSummary} from "./listening/listening-highlight-correct-summary";
// import {listeningFillInTheBlanks} from "./listening/listening-fill-in-the-blanks";
// import {listeningWriteFromDictation} from "./listening/listening-write-from-dictation";
// import {listeningMultipleAnswers} from "./listening/listening-multiple-answers";
// import {listeningSingleAnswer} from "./listening/listening-single-answer";
// import {listeningSelectMissingWord} from "./listening/listening-select-missing-word";
// import {listeningSummarizeSpokenText} from "./listening/listening-summarize-spoken-text";
// import {listeningHighlightIncorrectWords} from "./listening/listening-highlight-incorrect-words";
// //WRITING
// import {writingWriteEssay} from "./writing/writing-write-essay";
// import {writingSummarizeWrittenText} from "./writing/writing-summarize-written-text";
// //SPEAKING
// import {speakingReadAloud} from "./speaking/speaking-read-aloud";
// import {speakingRetellLecture} from "./speaking/speaking-retell-lecture";
// import {speakingRepeatSentence} from "./speaking/speaking-repeat.sentence";
// import {speakingDescribeImage} from "./speaking/speaking-describe-image";
// import {speakingAnswerShortQuestion} from "./speaking/speaking-answer-short-question";
//
// const initialState = {
//   loading: false,
//   //READING
//   readingFillInTheBlanks: [],
//   readingReOrderParagraph: [],
//   readingMultipleAnswers: [],
//   readingSingleAnswer: [],
//   readingFillInTheBlanksDropDown: [],
//   //LISTENING
//   listeningSelectMissingWord: [],
//   listeningMultipleAnswers: [],
//   listeningHighlightCorrectSummary: [],
//   listeningWriteFromDictation: [],
//   listeningHighlightIncorrectWords: [],
//   listeningSummarizeSpokenText: [],
//   listeningSingleAnswer: [],
//   listeningFillInTheBlanks: [],
//   //WRITING
//   writingSummarizeWrittenText: [],
//   writingWriteEssay: [],
//   //SPEAKING
//   speakingReadAloud: [],
//   speakingRetellLecture: [],
//   speakingRepeatSentence: [],
//   speakingDescribeImage: [],
//   speakingAnswerShortQuestion: [],
// };
//
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     //READING
//     case ActionTypes.GET_READING_FILL_IN_THE_BLANKS:
//       return {
//         ...state,
//         readingFillInTheBlanks: readingFillInTheBlanks,
//       };
//     case ActionTypes.GET_READING_REORDER_PARAGRAPH: {
//       return {
//         ...state,
//         readingReOrderParagraph: readingReOrderParagraph
//       }
//     }
//     case ActionTypes.GET_READING_SINGLE_ANSWER: {
//       return {
//         ...state,
//         readingSingleAnswer: readingSingleAnswer
//       }
//     }
//     case ActionTypes.GET_READING_FILL_IN_THE_BLANKS_DROP_DOWN: {
//       return {
//         ...state,
//         readingFillInTheBlanksDropDown: readingFillInTheBlanksDropDown
//       }
//     }
//     case ActionTypes.GET_READING_MULTIPLE_ANSWERS: {
//       return {
//         ...state,
//         readingMultipleAnswers: readingMultipleAnswers
//       }
//     }
//     //LISTENING
//     case ActionTypes.GET_LISTENING_SELECT_MISSING_WORD: {
//       return {
//         ...state,
//         listeningSelectMissingWord: listeningSelectMissingWord
//       }
//     }
//     case ActionTypes.GET_LISTENING_MULTIPLE_ANSWERS: {
//       return {
//         ...state,
//         listeningMultipleAnswers: listeningMultipleAnswers
//       }
//     }
//     case ActionTypes.GET_LISTENING_HIGHLIGHT_CORRECT_SUMMARY: {
//       return {
//         ...state,
//         listeningHighlightCorrectSummary: listeningHighlightCorrectSummary
//       }
//     }
//     case ActionTypes.GET_LISTENING_WRITE_FROM_DICTATION: {
//       return {
//         ...state,
//         listeningWriteFromDictation: listeningWriteFromDictation
//       }
//     }
//     case ActionTypes.GET_LISTENING_HIGHLIGHT_INCORRECT_WORDS: {
//       return {
//         ...state,
//         listeningHighlightIncorrectWords: listeningHighlightIncorrectWords
//       }
//     }
//     case ActionTypes.GET_LISTENING_SUMMARIZE_SPOKEN_TEXT: {
//       return {
//         ...state,
//         listeningSummarizeSpokenText: listeningSummarizeSpokenText
//       }
//     }
//     case ActionTypes.GET_LISTENING_SINGLE_ANSWER: {
//       return {
//         ...state,
//         listeningSingleAnswer: listeningSingleAnswer
//       }
//     }
//     case ActionTypes.GET_LISTENING_FILL_IN_THE_BLANKS: {
//       return {
//         ...state,
//         listeningFillInTheBlanks: listeningFillInTheBlanks
//       }
//     }
//     //WRITING
//     case ActionTypes.GET_WRITING_WRITE_ESSAY: {
//       return {
//         ...state,
//         writingWriteEssay: writingWriteEssay
//       }
//     }
//     case ActionTypes.GET_WRITING_SUMMARIZE_WRITTEN_TEXT: {
//       return {
//         ...state,
//         writingSummarizeWrittenText: writingSummarizeWrittenText
//       }
//     }
//     //SPEAKING
//     case ActionTypes.GET_SPEAKING_READ_ALOUD: {
//       return {
//         ...state,
//         speakingReadAloud: speakingReadAloud
//       }
//     }
//     case ActionTypes.GET_SPEAKING_RETELL_LECTURE: {
//       return {
//         ...state,
//         speakingRetellLecture: speakingRetellLecture
//       }
//     }
//     case ActionTypes.GET_SPEAKING_REPEAT_SENTENCE: {
//       return {
//         ...state,
//         speakingRepeatSentence: speakingRepeatSentence
//       }
//     }
//     case ActionTypes.GET_SPEAKING_DESCRIBE_IMAGE: {
//       return {
//         ...state,
//         speakingDescribeImage: speakingDescribeImage
//       }
//     }
//     case ActionTypes.GET_SPEAKING_ANSWER_SHORT_QUESTION: {
//       return {
//         ...state,
//         speakingAnswerShortQuestion: speakingAnswerShortQuestion
//       }
//     }
//     default:
//       return state;
//   }
// };
//
// export default reducer;


import { combineReducers } from 'redux';
import readingReducer from "./reading/readingReducer"
import speakingReducer from "./speaking/speakingReducer";
import listeningReducer from "./listening/listeningReducer";
import writingReducer from "./writing/writingReducer";

const practiceReducer = combineReducers({
  reading: readingReducer,
  speaking: speakingReducer,
  listening: listeningReducer,
  writing: writingReducer
});

export default practiceReducer;