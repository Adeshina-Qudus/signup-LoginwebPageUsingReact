import WebSignUpPage from "../auth/signuppage";
import LoginPage from "../auth/LoginPage";

export const Routes = [
    {
        path:"/sign-up",
        element:<WebSignUpPage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    }
]
