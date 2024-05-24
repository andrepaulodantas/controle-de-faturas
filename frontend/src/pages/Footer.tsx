import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit" style={{ width: '100%', textAlign: 'center' }}>
          © 2024 EngDeveloper. Todos os direitos reservados.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
