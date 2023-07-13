import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import StartPage from "../Components/StartPage/StartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
