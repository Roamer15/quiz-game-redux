// pages/ResultPage.jsx
import ResultCard from '../components/ResultCard';
import { useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { resetQuiz } from '../features/quiz/QuizSlice';

function ResultPage() {
  const { answers, questions } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const score = useMemo(
    () => answers.filter((q) => q.correct_answer === q.userAnswer).length,
    [answers]
  );

  const handleReturnToHome = () => {
    dispatch(resetQuiz());
    navigate('/');
  };

  return (
    <>
      <ResultCard
        answers={answers}
        score={score}
        home={handleReturnToHome}
        questions={questions}
      />
    </>
  );
}

export default ResultPage;