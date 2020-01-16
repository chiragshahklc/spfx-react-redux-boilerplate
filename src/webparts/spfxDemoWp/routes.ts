import Home from "./pages/Home";
import About from "./pages/About";
// Required props to generate actual routes
import { RouteProps } from "react-router-dom";
// Extending custom interface with RouteProps for extra props which user requires
interface IRoutes extends RouteProps {
  name: string;
}
const routes: IRoutes[] = [
  {
    path: "/about",
    component: About,
    name: "About"
  },
  {
    path: "/",
    component: Home,
    name: "Home"
  }
];
export default routes;
