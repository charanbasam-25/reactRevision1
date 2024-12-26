import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalState } from "./context/index.jsx";

// Ensure the root element exists in your HTML file
const rootElement = document.getElementById("root");
if (rootElement) {
  console.log(rootElement,":rottttttx")
  createRoot(rootElement).render(
    <GlobalState>
      <App />
    </GlobalState>
  );
} else {
  console.error("Root element not found");
}
