import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../LandingPage";
import LoginPage from "../../auth/login/loginPage";
import RegisterPage from "../../auth/register/registerPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
]);
