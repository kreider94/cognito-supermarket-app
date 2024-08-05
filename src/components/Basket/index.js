import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const Basket = ({ basketItems, removeFromBasket }) => (
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
  </div>
);

Basket.propTypes = {
  basketItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Ensure each item has a unique identifier
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  removeFromBasket: PropTypes.func.isRequired,
};

export default Basket;
