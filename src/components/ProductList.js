import React from 'react';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Product from './Product';

const ProductList = ({ products, addToBasket }) => (
  <Grid container spacing={2}>
    {products.map((product) => (
      <Product key={product.id} product={product} addToBasket={addToBasket} />
    ))}
  </Grid>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
    }),
  ).isRequired,
  addToBasket: PropTypes.func.isRequired,
};

export default ProductList;
