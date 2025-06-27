import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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
      <AppBar position="fixed" color="secondary">
        <Toolbar>ACT</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
