//action-types
import { ActionTypes } from "./constants";

//READING
export const getReadingFillInTheBlanks = () => ({
  type: ActionTypes.GET_READING_FILL_IN_THE_BLANKS,
});
export const getReadingReOrderParagraph = () => ({
  type: ActionTypes.GET_READING_REORDER_PARAGRAPH
})
export const getReadingMultipleAnswers = () => ({
  type: ActionTypes.GET_READING_MULTIPLE_ANSWERS
})
export const getReadingSingleAnswer = () => ({
  type: ActionTypes.GET_READING_SINGLE_ANSWER
})
export const getReadingFillInTheBlanksDropDown = () => ({
  type: ActionTypes.GET_READING_FILL_IN_THE_BLANKS_DROP_DOWN
})

//LISTENING
export const getListeningSelectMissingWord = () => ({
  type: ActionTypes.GET_LISTENING_SELECT_MISSING_WORD
})
export const getListeningMultipleAnswers = () => ({
  type: ActionTypes.GET_LISTENING_MULTIPLE_ANSWERS
})
export const getListeningHighlightCorrectSummary = () => ({
  type: ActionTypes.GET_LISTENING_HIGHLIGHT_CORRECT_SUMMARY
})
export const getListeningWriteFromDictation = () => ({
  type: ActionTypes.GET_LISTENING_WRITE_FROM_DICTATION
})
export const getListeningHighlightIncorrectWords = () => ({
  type: ActionTypes.GET_LISTENING_HIGHLIGHT_INCORRECT_WORDS
})
export const getListeningSummarizeSpokenText = () => ({
  type: ActionTypes.GET_LISTENING_SUMMARIZE_SPOKEN_TEXT
})
export const getListeningSingleAnswer = () => ({
  type: ActionTypes.GET_LISTENING_SINGLE_ANSWER
})
export const getListeningFillInTheBlanks = () => ({
  type: ActionTypes.GET_LISTENING_FILL_IN_THE_BLANKS
})

//WRITING
export const getWritingSummarizeWrittenText = () => ({
  type: ActionTypes.GET_WRITING_SUMMARIZE_WRITTEN_TEXT
})
export const getWritingWriteEssay = () => ({
  type: ActionTypes.GET_WRITING_WRITE_ESSAY
})

//SPEAKING
export const getSpeakingReadAloud = () => ({
  type: ActionTypes.GET_SPEAKING_READ_ALOUD
})
export const getSpeakingRetellLecture = () => ({
  type: ActionTypes.GET_SPEAKING_RETELL_LECTURE
})
export const getSpeakingRepeatSentence = () => ({
  type: ActionTypes.GET_SPEAKING_REPEAT_SENTENCE
})
export const getSpeakingDescribeImage = () => ({
  type: ActionTypes.GET_SPEAKING_DESCRIBE_IMAGE
})
export const getSpeakingAnswerShortQuestion = () => ({
  type: ActionTypes.GET_SPEAKING_ANSWER_SHORT_QUESTION
})