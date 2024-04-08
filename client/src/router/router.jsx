import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import Profile from "../pages/Profile/Profile";
import Role from "../pages/Role/Role";
import Sucess from "../pages/Sucess/Sucess";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/role",
    element: <Role />,
  },
  {
    path: "/success",
    element: <Sucess />,
  },
]);

export default router;
