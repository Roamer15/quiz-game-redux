import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchQuizQuestions } from '../store/QuizSlice';
import HomeCard from '../components/HomeCard';

function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Select state from Redux store
  const { loading } = useSelector((state) => state.quiz);

  const handleQuizPageNavigation = () => {
    navigate('/quizpage/1');
  };

  useEffect(() => {
    dispatch(fetchQuizQuestions()); // Dispatch action to fetch questions
  }, [dispatch]);

  return (
    <HomeCard isLoading={loading} handleQuizPage={handleQuizPageNavigation} />
  );
}

export default LandingPage;
