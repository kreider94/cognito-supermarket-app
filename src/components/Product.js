import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  Button,
  Grid,
  Collapse,
  Typography,
  Box,
} from '@mui/material';

const Product = ({ product, addToBasket }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} md={6} key={product.id}>
      <Box p={2} boxShadow={1}>
        <ListItem>
          <Grid container spacing={1}>
            <Grid item xs={12} md={8}>
              <ListItemText primary={`${product.name}: $${product.price}`} />
              <Button onClick={handleToggle}>more</Button>
            </Grid>
            <Grid item xs={12} md={4} style={{ textAlign: 'right' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  addToBasket(product);
                }}
                fullWidth={window.innerWidth <= 600}
              >
                Add to Basket
              </Button>
            </Grid>
          </Grid>
        </ListItem>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ padding: '0 16px 16px' }}
          >
            {product.description}
          </Typography>
        </Collapse>
      </Box>
    </Grid>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
  addToBasket: PropTypes.func.isRequired,
};

export default Product;
