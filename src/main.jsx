import { createRoot } from "react-dom/client";
import "./style.css";

const root = createRoot(document.getElementById("root"));
const courseName = "React";
const lectureCount = 30;
const isActive = true;
const pageStyle = {
  textAlign: "center",
  backgroundColor: "lightgray",
  padding: "10px",
};

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
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1 style={pageStyle} className="text-success">
        Welcome to the React Course!
      </h1>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <p>Made with Love by sdmule</p>
    </div>
  );
}

root.render(
  <div>
    <HomePage />
  </div>,
);
