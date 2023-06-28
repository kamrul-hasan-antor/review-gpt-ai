import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Signin from "../Components/Signin/Signin";
import Signup from "../Components/Signup/Signup";
import StartPage from "../Components/StartPage/StartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
