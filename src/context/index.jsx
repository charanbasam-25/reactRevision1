import { createContext, useState } from "react";

const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");

  const GlobalObject = {
    theme,
    handleTheme,
  };

  function handleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <GlobalContext.Provider value={GlobalObject}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalState, GlobalContext };
