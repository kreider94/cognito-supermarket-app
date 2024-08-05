import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const Basket = ({ basketItems, removeFromBasket }) => {
  // Calculate the total price of items in the basket
  const basketTotal = basketItems.reduce(
    (total, item) => total + item.price,
    0,
  );

  return (
    <div>
      <Typography variant="h4">Basket</Typography>
      <List>
        {basketItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={`${item.name}: $${item.price}`} />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeFromBasket(item.id)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>

      <Box mt={2} align="right">
        <Typography variant="h6">Total: ${basketTotal.toFixed(2)}</Typography>
      </Box>
    </div>
  );
};

Basket.propTypes = {
  basketItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  removeFromBasket: PropTypes.func.isRequired,
};

export default Basket;
