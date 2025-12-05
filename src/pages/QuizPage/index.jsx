import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, data } = location.state;

  const [questionPosition, setQuestionPosition] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  // const [isSelected, setIsSelected] = useState(false);
  const [timeToFinish, setTimeToFinish] = useState(40);
  const timerRef = useRef(null);

  const findScoreAndSubmit = () => {
    let score = 0;
    data.forEach((question, index) => {
      if (selectedAnswer[index] === question.answer) {
        score += 1;
      }
    });

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    navigate("/result", {
      state: {
        score: score,
        completeQuestions: data.length,
        quizTitle: title,
      },
    });
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeToFinish((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(timerRef.current);

          setTimeout(() => {
            findScoreAndSubmit();
          }, 50);
          return 0;
        }
        return previousTime - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const timeFormatting = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
  };

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
    setSelectedAnswer((prev) => ({
      ...prev,
      [questionPosition]: answer,
    }));
  };

  return (
    <div id={styles.quizWrapper}>
      <div className={styles.quizContainer}>
        <div className={styles.headerWrapper}>
          <Link to="/categories">
            <span>⬅</span>
          </Link>
          <h1> {title} </h1>
          <div className={styles.timer}>
            Time Left: {timeFormatting(timeToFinish)}
          </div>
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
                choiceStyle = `${styles.choice} ${styles.right}`;
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
        <div className={styles.navBtns}>
          <div>
            {questionPosition > 0 && (
              <button className={styles.prevBtn} onClick={handleMoveToPrevious}>
                Previous
              </button>
            )}
          </div>
          {/* 
          only show the next button after an answer is selected. {selectedAnswer[questionPosition]} not {selectedAnswer} */}
          <div>
            {selectedAnswer[questionPosition] &&
              //i did this so that if the question is on the last index (data.length - 1), do not show the next button because of course, there is no next question.
              questionPosition < data.length - 1 && (
                <button className={styles.nextBtn} onClick={handleMoveToNext}>
                  Next
                </button>
              )}
          </div>

          <div>
            {selectedAnswer[questionPosition] &&
              //show the submit button on the last question and after an answer is selected
              questionPosition === data.length - 1 && (
                <button
                  className={styles.submitBtn}
                  onClick={findScoreAndSubmit}
                >
                  Submit
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Quiz;
