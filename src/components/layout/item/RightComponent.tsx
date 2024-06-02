import React from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {ListTask} from "react-bootstrap-icons";
import {Outlet, useLocation} from "react-router";

const RightComponent = () => {
  const {pathname} = useLocation();

  return (
    <div className={`w-full`}>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static" style={{backgroundColor: '#fff3d4', color: '#000'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            >
              <ListTask/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              클뉴즈 서비스
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {
        pathname === '/' ?
          <div>
            main
          </div>
          :
          <Outlet/>
      }
    </div>
  );
}

export default RightComponent;
