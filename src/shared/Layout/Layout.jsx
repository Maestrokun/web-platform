import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Layer, NavBar, SideNav } from "./styled.layout";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ADMIN_SIDENAVS } from "../../constant/sidenav";
import Loader from "../Loader";
// import ContentWrapper from "./contentWrapper";

const Layout = ({ children }) => {
  // const { pathname } = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Layer>
        <NavBar>Platform</NavBar>
        <SideNav>
          <Box>
            {ADMIN_SIDENAVS.map((sidenav) =>
              sidenav.isHeader ? (
                <Typography
                  sx={{
                    ml: 5,
                    mt: 4,
                    color: "#A7A9BC",
                  }}
                  variant="body1"
                  key={sidenav.name}
                >
                  {sidenav.name}
                </Typography>
              ) : (
                <NavLink
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                  to={sidenav.path}
                  key={sidenav.name}
                >
                  <Typography
                    fontSize="18px"
                    fontWeight={500}
                    sx={{
                      padding: "10px",
                    }}
                  >
                    {sidenav.name}
                  </Typography>
                </NavLink>
              )
            )}
          </Box>
        </SideNav>
        {children}
      </Layer>
    </Suspense>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
