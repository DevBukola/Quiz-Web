import styles from "./index.module.css";
import { Link } from "react-router";

function LandingPage() {
  return (
    <div id={styles.homeContainer}>
      <div id={styles.triviaLogo}>
        <img src="/q.mark.png" className={styles.icon} id={styles.questionIcon} alt="" />
        <h1 className={styles.triviaTitle}>TRIVIA</h1>
        <img
          src="/brain1.png"
          className={styles.icon}
          id={styles.brain}
          alt="brain image"
        />
      </div>

      <div id={styles.getStarted}>
        <Link to="/categories">
          <button>START</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
