import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Quiz() {
  const location = useLocation();
  const { title, data } = location.state;

  const [questionPosition, setQuestionPosition] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  // const [isSelected, setIsSelected] = useState(false);

  const handleMoveToNext = () => {
    if (questionPosition < data.length - 1)
      setQuestionPosition(questionPosition + 1);
  };

  const handleMoveToPrevious = () => {
    if (questionPosition > 0) {
      setQuestionPosition(questionPosition - 1);
    }
  };

  const handleClickedChoice = (answer) => {
    if (selectedAnswer[questionPosition] == null) {
      setSelectedAnswer((prev) => ({
        ...prev,
        [questionPosition]: answer,
      }));
    }
  };

  return (
    <div id={styles.quizWrapper}>
      <div className={styles.quizContainer}>
        <div className={styles.headerWrapper}>
          <Link to="/categories">
            <span>⬅</span>
          </Link>
          <h1> {title} </h1>
        </div>

        <div id={styles.questionWrapper}>
          <h2 className={styles.quizTitle}>
            {/* {questionPosition} / {data.length} */}
            {questionPosition + 1} / {data.length}
          </h2>
          <p className={styles.quizQuestion}>
            {data[questionPosition].question}
          </p>
        </div>
        <div className={styles.choices}>
          {data[questionPosition].choices.map((choice, index) => {
            const picked = selectedAnswer[questionPosition];
            const right = data[questionPosition].answer;

            let choiceStyle = styles.choice;

            if (picked != null) {
              if (choice === picked && choice === right) {
                console.log("Answer picked and correct!");
                choiceStyle = `${styles.choice} ${styles.right}`;
              } else if (choice === picked && choice != right) {
                console.log("The answer picked is wrong!");
                choiceStyle = `${styles.choice} ${styles.wrong}`;
                //this line shows the correct choice when a user selected the wrong one to let them know the correct answeer to the question even though they did not get it right.
              } else if (choice === right && choice != picked) {
                console.log("This is the correct answer.");
                choiceStyle = `${styles.choice} ${styles.correct}`;
              }
            }

            return (
              <div
                key={index}
                className={choiceStyle}
                onClick={() => handleClickedChoice(choice)}
              >
                {choice}
              </div>
            );
          })}
        </div>
        <div className={styles.NavBtns}>
          {questionPosition > 0 && (
            <button className={styles.PrevBtn} onClick={handleMoveToPrevious}>
              Previous
            </button>
          )}
          {/* 
          only show the next button after an answer is selected. {selectedAnswer[questionPosition]} not {selectedAnswer} */}
          {selectedAnswer[questionPosition] &&
            //i did this so that if the question is on the last index (data.length - 1), do not show the next button because of course, there is no next question.
            questionPosition < data.length - 1 && (
              <button className={styles.NextBtn} onClick={handleMoveToNext}>
                Next
              </button>
            )}

          {selectedAnswer[questionPosition] &&
            //show the submit button on the last question and after an answer is selected
            questionPosition === data.length - 1 && (
              <button className={styles.submitBtn}>Submit</button>
            )}
        </div>
      </div>
    </div>
  );
}
export default Quiz;
