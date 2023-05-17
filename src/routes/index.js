import React from "react";
import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";
import BaseRoutes from "../constant/baseRoute";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <BrowserRoutes>
          {BaseRoutes.map(({ path, Layout, useAuth, component: Component }) =>
            Layout && useAuth ? (
              <Route
                key={path}
                path={path}
                element={
                  <PrivateRoute>
                    <Layout key={path}>
                      <Component />
                    </Layout>
                  </PrivateRoute>
                }
              />
            ) : (
              <Route key={path} path={path} element={<Component />} />
            )
          )}
          <Route path="*" element={<div>Not Found</div>} />
        </BrowserRoutes>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
