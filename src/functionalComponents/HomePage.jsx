import { GlobalContext } from "../context";
import { useContext } from "react";
import "./homePage.css";
import HomePageButton from "./HomePageButton";

const HomePage = () => {
  const { theme } = useContext(GlobalContext);
  console.log( useContext(GlobalContext))
  return (
    <>
      <div className={`homepage ${theme === "light" ? "lighttheme" : "darktheme"} `}>
        <h1>Welcome to the Home Page</h1>
        <h2>This is the Home page for context api</h2>
      </div>
      <HomePageButton />
    </>
  );
};

export default HomePage;
