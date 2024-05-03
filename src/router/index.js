import Home from "../pages/home";
import CSSGrid from "../pages/navbar";
import Login from "../pages/login";
import SignUp from "../pages/signup";

const publicRouter = [
  { path: "/", component: Home },
  { path: "/navbar", component: CSSGrid },
  { path: "/login", component: Login, layout: null },
  { path: "/signup", component: SignUp, layout: null },
];
const privateRouser = [];

export { publicRouter, privateRouser };
