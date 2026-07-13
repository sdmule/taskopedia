import { createRoot } from "react-dom/client";
import "./style.css";
import { Header } from "./Layout/header";
import { Footer } from "./Layout/footer";
import Students from "./Students";
import StudentReview from "./StudentReview";

const root = createRoot(document.getElementById("root"));
const courseName = "React";
const lectureCount = 30;
const isActive = true;

function HomePage() {
  return (
    <div>
      <Header />
      <p className="customHeading">
        We are super excited to learn React to become .Net Full Stack Developer
      </p>
      <h3>Topics to learn in the {courseName} Course</h3>
      <p>Lecture Count - {lectureCount}</p>
      <p>Is Active : {isActive.toString()}</p>
      <p>Is Active : {isActive ? "Active" : "Inactive"}</p>
      <ul>
        <li>JSX</li>
        <li>Components</li>
        <li>Routing</li>
        <li>State Management</li>
      </ul>
      <div>
        Enter Task :{" "}
        <input type="text" maxLength={6} disabled={isActive}></input>
      </div>
      <hr />
      <h5 className="pt-2">Students Enrolled</h5>
      <Students experience={3.8} fullName="Sauarbh Mule">
        <StudentReview />
      </Students>
      <Students experience={2} fullName="Dhanaraj Yedke" />
      <Students experience={1} fullName="Sumit Mule" />
      <Footer />
    </div>
  );
}

root.render(
  <div>
    <HomePage />
  </div>,
);
