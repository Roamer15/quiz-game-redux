import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router'
import { addAnswer } from '../features/quiz/QuizSlice'
import QuestionCard from '../components/QuestionCard'

function QuizPage() {
    const navigate = useNavigate()
    const { number: num } = useParams()
    const number = parseInt(num, 10)

    const dispatch = useDispatch()

    const questions = useSelector((state) => state.quiz.questions)

    const [duration, setDuration] = useState(30)

    const handleNextQuestion = (question, answer) => {
        const newQuestionA = { ...question, userAnswer: answer }

       dispatch(addAnswer(newQuestionA))
    
        if (number === questions.length - 1) {
          setDuration(30)
          return navigate('/results')
        }
        navigate(`/quizpage/${number + 1}`)
    }

    useEffect(() => {
        if (duration > 0) {
          const timer = setInterval(() => {
            setDuration((prevTime) => prevTime - 1)
          }, 1000)
    
          return () => clearInterval(timer)
        }
    
        if (duration === 0) {
          handleNextQuestion(questions[number], '')
          setDuration(30)
        }
      }, [duration])

      return (
        <QuestionCard
          nextQuestion={handleNextQuestion}
          question={questions[number - 1]}
          totalQuestion={questions.length}
          number={number}
          time={duration}
        />
      )
    
}

export default QuizPage