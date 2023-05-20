import { lazy } from "react";

import { ADMIN_SIDENAVS } from "./sidenav";

import { Layout as MainLayout } from "../shared/index";

import { BasePaths } from "./path";

const BaseRoutes = [
  {
    path: "/*",
    exact: true,
    component: lazy(() => import("../modules/Auth/routes/index")),
    Layout: false,
    useAuth: false,
  },
  {
    path: `${BasePaths.ADMIN}/*`,
    exact: true,
    component: lazy(() => import("../modules/UserPage/routes/index")),
    Layout: MainLayout,
    useAuth: true,
    sidenavItems: ADMIN_SIDENAVS,
  },
];

export default BaseRoutes;
