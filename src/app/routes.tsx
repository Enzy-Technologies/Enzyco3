import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./Home";
import { Features } from "./Features";
import { Solutions } from "./Solutions";
import { Resources } from "./Resources";
import { About } from "./About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "features", Component: Features },
      { path: "solutions", Component: Solutions },
      { path: "resources", Component: Resources },
      { path: "about", Component: About },
      { path: "*", Component: Home }, // Fallback to Home
    ],
  },
]);