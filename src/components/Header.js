import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = ({ showBasket, showProductList, itemsInBasket }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Supermarket
      </Typography>
      <Button color="inherit" onClick={showProductList}>
        Home
      </Button>
      <Button color="inherit" onClick={showBasket}>
        Basket {itemsInBasket ? `(${itemsInBasket})` : ''}
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
