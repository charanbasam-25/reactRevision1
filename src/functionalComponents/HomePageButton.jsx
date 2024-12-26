import React, { useContext } from "react";
import { GlobalContext } from "../context";

const HomePageButton = () => {
    const { theme, handleTheme } = useContext(GlobalContext);
    
console.log(theme,":theme")
  return (
    <div className="homePageButton">
      <button onClick={handleTheme}>toggle theme</button>
    </div>
  );
};

export default HomePageButton;
