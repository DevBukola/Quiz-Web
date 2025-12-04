import { Link } from "react-router";
import artQuestions from "../../../../components/questions/art";
import natureQuestions from "../../../../components/questions/nature";
import techQuestions from "../../../../components/questions/tech";

import Card from "./Card";
import styles from "./Courses.module.css";
import { data } from "react-router";

const courses = [
  {
    id: 1,
    title: "Technology & Gadgets",
    bgImage: "/tech.jpg",
    data: techQuestions,
  },
  {
    id: 2,
    title: "Art, Design & Pop Art",
    bgImage: "/art.jpg",
    data: artQuestions,
  },
  {
    id: 3,
    title: "Animals, Nature & Wildlife",
    bgImage: "/animal.jpg",
    data: natureQuestions,
  },
  {
    id: 4,
    title: "Animals, Nature & Wildlife",
    bgImage: "/nature.jpg",
    data: artQuestions,
  },
];

function CourseCards() {
  return (
    <div id={styles.coursesWrapper}>
      {courses.map((course) => (
        <Link
          to="/quiz"
          key={course.id}
          state={{
            data: course.data,
            title: course.title,
            image: course.bgImage,
          }}
        >
          <Card title={course.title} bgImage={course.bgImage} />
        </Link>
      ))}
    </div>
  );
}

export default CourseCards;
