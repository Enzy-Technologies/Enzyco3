import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./Home";
import { Features } from "./Features";
import { Solutions } from "./Solutions";
import { Resources } from "./Resources";
import { About } from "./About";
import { Terms } from "./Terms";
import { Privacy } from "./Privacy";

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
      { path: "terms", Component: Terms },
      { path: "privacy", Component: Privacy },
      { path: "*", Component: Home }, // Fallback to Home
    ],
  },
]);