import React from "react";
import { Layer, NavBar, SideNav } from "./styled.layout";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ADMIN_SIDENAVS } from "../../constant/sidenav";

const Layout = () => {
  return (
    <Layer>
      <NavBar>Platform</NavBar>
      <SideNav>
        <Box>
          {ADMIN_SIDENAVS.map((sidenav) => (
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
                sx={{ padding: "10px" }}
              >
                {sidenav.name}
              </Typography>
            </NavLink>
          ))}
        </Box>
      </SideNav>
    </Layer>
  );
};

export default Layout;
