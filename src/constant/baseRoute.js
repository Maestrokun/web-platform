import { lazy } from "react";

import { ADMIN_SIDENAVS } from "./sidenav";

import { Layout as MainLayout } from "../shared/index";

import { BasePaths } from "./path";

const BaseRoutes = [
  {
    path: "/*",
    exact: true,
    component: lazy(() => import("../Modules/Auth/routes/index")),
    Layout: false,
    useAuth: false,
  },
  {
    path: `${BasePaths.HOME}/*`,
    exact: true,
    component: lazy(() => import("../Modules/Home/routes/index")),
    Layout: MainLayout,
    useAuth: true,
    sidenavItems: ADMIN_SIDENAVS,
  },
];

export default BaseRoutes;
