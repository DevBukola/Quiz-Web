import styles from "./index.module.css";
import { Link } from "react-router";

function LandingPage() {
  return (
    <div id={styles.homeContainer}>
      <div>
        <img src="/a.png" alt="image" />
        <h1>Trivia</h1>
      </div>

      <div>
        <h3>Let's Play!</h3>
        <p>Get started now to participate</p>
      </div>

      <div id={styles.getStarted}>
        <Link to="/categories"><button>Get started</button></Link>
      </div>
    </div>
  );
}

export default LandingPage;
