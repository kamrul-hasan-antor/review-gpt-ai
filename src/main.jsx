import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ReviewProvider } from "./Contexts/ReviewProvider.jsx";
import AuthProvider from "./Contexts/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ReviewProvider>
        <App />
      </ReviewProvider>
    </AuthProvider>
  </React.StrictMode>
);
