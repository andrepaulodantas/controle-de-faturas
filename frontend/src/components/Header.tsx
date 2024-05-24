import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static" className="app-bar">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" className="menu-button">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="title">
      
        </Typography>
        <Box display={{ xs: 'none', sm: 'block' }}>
          <Button color="inherit" component={Link} to="/">Início</Button>
          <Button color="inherit" component={Link} to="/about">Sobre</Button>
          <Button color="inherit" component={Link} to="/contact">Contato</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/invoice-library">Biblioteca de Faturas</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
