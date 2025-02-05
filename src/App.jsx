import { BrowserRouter, Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import { Provider } from "react-redux"

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/quizpage/:number' element={<QuizPage />} />
          <Route path='/results' element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
