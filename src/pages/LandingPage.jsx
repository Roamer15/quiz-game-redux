// pages/LandingPage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { fetchQuestions } from '../services/quizApi';
import HomeCard from '../components/HomeCard';
import { useDispatch } from 'react-redux';
import { setQuestions } from '../features/quiz/QuizSlice';

function LandingPage() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleQuizPageNavigation = () => {
    navigate('/quizpage/1');
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = () => {
    fetchQuestions().then((data) => {
      if (data) {
        dispatch(setQuestions(data));
        setLoading(false);
      }
    });
  };

  return (
    <HomeCard isLoading={loading} handleQuizPage={handleQuizPageNavigation} />
  );
}

export default LandingPage;