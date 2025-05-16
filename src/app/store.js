import { configureStore } from '@reduxjs/toolkit'
import quizReducer from '../features/quiz/QuizSlice'

export default configureStore({
  reducer: {
    quiz: quizReducer
  }
})
