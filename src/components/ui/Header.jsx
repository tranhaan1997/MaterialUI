import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

export default function Header(props) {
  return (
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h3" color="secondary">
            ACT
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
