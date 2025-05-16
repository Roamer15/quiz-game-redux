import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";

function ResultCard({ answers, score, home, questions }) {
    console.log(answers);

    const percentage = (score / questions.length) * 100;
    const [trailColor, setTrailColor] = useState("#444");

    useEffect(() => {
        setTimeout(() => {
            setTrailColor("#888"); // Change color after mount
        }, 500);
    }, []);

    // Dynamic performance message based on score
    const getPerformanceMessage = () => {
        if (percentage === 100) return "🎉 Perfect Score! You're a genius!";
        if (percentage >= 80) return "🔥 Great Job! Almost there!";
        if (percentage >= 50) return "👍 Not bad! Keep practicing!";
        return "😓 Tough luck! Try again!";
    };

    return (
        <div className="result-container">
            {/* Circular Progress Bar */}
            <div className="circle-container">
                <div className="circle">
                    <CircularProgressbar
                        value={percentage}
                        text={`${score}/${questions.length}`}
                        styles={buildStyles({
                            textColor: "#333",
                            pathColor: "#00ff48",
                            trailColor: trailColor,
                            textSize: "14px",
                            transition: "stroke-dashoffset 0.5s ease-in-out",
                        })}
                    />
                </div>
            </div>

            <h3 className={score >= 5 ? "pass-message" : "fail-message"}>
                {score >= 5 ? "You Passed 🎉" : "You Failed 😓"}
            </h3>
            <p className="performance-message">{getPerformanceMessage()}</p>

            {/* Display Answer Breakdown */}
            <div className="answers-container">
                {answers.map((item, index) => {
                    const isCorrect = item.userAnswer === item.correct_answer;
                    return (
                        <div
                            className={`answer-box ${isCorrect ? "correct-answer" : "wrong-answer"}`}
                            key={index}
                        >
                            <p><strong>{index + 1}. {item.question}</strong></p>
                            <p>Correct Answer: <span className="correct-text">{item.correct_answer}</span></p>
                            <p>Your Answer: <span className={isCorrect ? "correct-text" : "wrong-text"}>{item.userAnswer}</span></p>
                        </div>
                    );
                })}
            </div>

            <button onClick={() => home()} className="btn-restart">
                🔄 Restart
            </button>
        </div>
    );
}

ResultCard.propTypes = {
    answers: PropTypes.array,
    score: PropTypes.number,
    home: PropTypes.func,
    questions: PropTypes.array,
};

export default ResultCard;
