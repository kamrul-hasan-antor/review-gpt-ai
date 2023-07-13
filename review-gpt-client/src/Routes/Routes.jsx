import { createBrowserRouter } from "react-router-dom";

import StartPage from "../Components/StartPage/StartPage";
import Review from "../pages/Review";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/review",
    element: <Review />,
  },
]);
