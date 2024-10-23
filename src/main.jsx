import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// tooster
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// global context
import { GlobalContextProvider } from "./context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
    <ToastContainer position="bottom-right"/>
  </GlobalContextProvider>,
);
