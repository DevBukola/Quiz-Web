import CourseCards from "./_partials/Courses/courses";
import "./index.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div id="container-wrapper">
      <div id="container">
        <Link to="/">
          {/* <span>&larr;</span> */}
          <span className="back-to-home">⬅</span>
        </Link>
        <div>
          <h1>Hello, welcome!</h1>
        </div>
        <div id="get-started-box">
          <h2>Start a quiz and enjoy</h2>
        </div>
        <CourseCards />
      </div>
    </div>
  );
}

export default Categories;
