import { createRoot } from "react-dom/client";
import "./style.css";

const root = createRoot(document.getElementById("root"));
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
      <h1>Made with Love by sdmule</h1>
    </div>
  );
}

root.render(
  <div>
    <HomePage />
  </div>,
);
