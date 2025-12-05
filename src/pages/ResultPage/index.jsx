import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

function QuizResult() {
  const location = useLocation();
  const { score, completeQuestions, quizTitle } = location.state || {
    score: 0,
    completeQuestions: 0,
    quizTitle: "Quiz",
  };

  const percentage =
    completeQuestions > 0 ? ((score / completeQuestions) * 100).toFixed(1) : 0;

  return (
    <div id={styles.resultContainer}>
      <div className={styles.secondCont}>
        <div className={styles.topText}>
          <h1>{quizTitle} Results</h1>
          <p>Quiz submitted successfully!</p>
        </div>
        <div className={styles.scoreCont}>
          <div className={styles.scoreWrapper}>
            <h2>Your final score is:</h2>
            <div className={styles.score}>
              {" "}
              {score} / {completeQuestions}{" "}
            </div>
            <p> {percentage}% </p>
          </div>
          <Link to="/categories">
            <button>Back to Categories</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuizResult;
