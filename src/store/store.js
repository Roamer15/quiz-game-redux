import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './QuizSlice'

export default configureStore({
    reducer: {
        quiz: quizReducer
    }
})