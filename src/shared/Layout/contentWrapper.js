import React from "react";
import { Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { useLayoutBG } from "../../hooks/useLayoutBg";

export default function ContentWrapper({ children }) {
  const { bgColor } = useLayoutBG();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <Grid item sm={10} sx={{ ml: "17%", mt: 15 }}>
        <Box
          component="main"
          className="main"
          sx={{ backgroundColor: bgColor, minHeight: "90vh" }}
        >
          {children}
        </Box>
      </Grid>
    </>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
