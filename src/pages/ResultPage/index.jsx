import { useLocation } from "react-router-dom";

function QuizResult() {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div>
      <h1>
        Your Score: {score} / {total}
      </h1>
    </div>
  );
}

export default QuizResult;
