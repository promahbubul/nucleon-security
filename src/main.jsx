import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Provider } from "react-redux";
// import { Toaster } from "react-hot-toast";
// import { store } from "@store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  // <Toaster position="top-right" reverseOrder={false} />
  <App />
  // </Provider>
);
