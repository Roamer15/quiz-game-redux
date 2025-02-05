import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import fetchQuestions from '../services/quizApi'

export const fetchQuizQuestions = createAsyncThunk(
    'quiz/fetchQuestions',

    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchQuestions()
            return data
        }
        catch(error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    questions: [],
    answers: [],
    loading: true,
    error: null
}

const QuizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload
        },
        setAnswers: (state, action) => {
            state.questions = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchQuizQuestions.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchQuizQuestions.fulfilled, (state, action) => {
            state.questions = action.payload;
            state.loading = false;
          })
          .addCase(fetchQuizQuestions.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
          });
    }
})

export const {setQuestions, setAnswers} = QuizSlice.actions
export default QuizSlice.reducer