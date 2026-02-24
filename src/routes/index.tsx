import { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../page/ErrorPage";
import { frontRoutes } from "./frontRoutes";
import { lazy } from "react";
import Page404 from "../page/page404/Page404";
// import Home from "../page/home/HomePage";

const Home = lazy(() => import("../page/home/HomePage"));
const About = lazy(() => import("../page/about/About"));
const Contact = lazy(() => import("../page/contact/Contact"));
const Projects = lazy(() => import("../page/projects/Projects"));
const ProjectsItem = lazy(() => import("../page/projects/ProjectsItem"));
const Exhibitions = lazy(() => import("../page/exhibitions/ExhibitionsPage"));
const ExhibitionsItem = lazy(
  () => import("../page/exhibitions/ExhibitionItemPage"),
);

export type CustomHandle = {
  label?: string;
  back?: {
    link: string;
    name: string;
  };
};

type CustomRouteObject = RouteObject & {
  handle?: CustomHandle;
  children?: CustomRouteObject[];
};

export const routes: CustomRouteObject[] = [
  {
    path: "/", 
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        handle: {
          label: "Home",
        },
      },
      {
        path: frontRoutes.pages.projects.base,
        children: [
          {
            index: true,
            Component: Projects,
            handle: {
              label: "Projects",
            },
          },
          {
            path: frontRoutes.pages.projects.item,
            Component: ProjectsItem,
            handle: {
              back: {
                link: frontRoutes.pages.projects.base,
                name: "Back to Projects",
              },
            },
          },
        ],
      },
      {
        path: frontRoutes.pages.exhibitions.base,
        children: [
          {
            index: true,
            Component: Exhibitions,
            handle: {
              label: "Exhibitions",
            },
          },
          {
            path: frontRoutes.pages.exhibitions.item,
            Component: ExhibitionsItem,
            handle: {
              back: {
                link: frontRoutes.pages.exhibitions.base,
                name: "Back to Exhibitions",
              },
            },
          },
        ],
      },
      {
        path: frontRoutes.pages.about,
        Component: About,
        handle: {
          label: "About",
        },
      },
      {
        path: frontRoutes.pages.contact,
        Component: Contact,
        handle: {
          label: "Contact",
        },
      },
      {
        path: "*",
        Component: Page404,
      },
    ],
  },
];
const router = createBrowserRouter(routes);
export default router;


