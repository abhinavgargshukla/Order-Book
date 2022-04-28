import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import './styles.js'
// import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

const Navbar= ()=> {
  return (
    <Box sx={{ flexGrow: 1 }} className="navbar">
      <AppBar position="static" >
        <Toolbar variant="dense">
        <img src='../../logo.svg' alt='logo' width="100" height="25"/>
          <Typography component={Link} to="/" variant="h6" color="inherit" >
             Order Book
          </Typography>

         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
