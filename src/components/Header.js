import React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';

const Header = ({ showBasket, showProductList, itemsInBasket }) => (
  <AppBar position="static">
    <Toolbar>
      <Box
        component="img"
        sx={{
          height: 50,
        }}
        alt="Logo"
        src={`${process.env.PUBLIC_URL}/logo.png`}
      />
      <Box>
        <Button color="inherit" onClick={showProductList}>
          Home
        </Button>
        <Button color="inherit" onClick={showBasket}>
          Basket {itemsInBasket ? `(${itemsInBasket})` : ''}
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
