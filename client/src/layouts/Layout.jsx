import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Box sx={{marginY: 2}}>
          <h1 align="center">Favorite Authors</h1>
        </Box>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
