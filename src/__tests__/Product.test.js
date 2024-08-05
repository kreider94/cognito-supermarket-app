import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from '../components/Product';

// define test product
const product = {
  id: 1,
  name: 'Product 1',
  price: 10,
  description: 'This is a description of Product 1.',
};

const addToBasket = jest.fn();

test('renders product name and price', () => {
  render(<Product product={product} addToBasket={addToBasket} />);

  expect(screen.getByText('Product 1: $10')).toBeInTheDocument();
  expect(screen.getByText('more')).toBeInTheDocument();
  expect(screen.getByText('Add to Basket')).toBeInTheDocument();
});

test('expands and shows description on button click', () => {
  render(<Product product={product} addToBasket={addToBasket} />);

  // the description should not be visible on page load
  expect(
    screen.queryByText('This is a description of Product 1.'),
  ).not.toBeInTheDocument();

  // click "more" button to expand
  fireEvent.click(screen.getByText('more'));

  // description should now be visible
  expect(
    screen.getByText('This is a description of Product 1.'),
  ).toBeInTheDocument();

  // click "more" button to collapse
  fireEvent.click(screen.getByText('more'));

  // description should no longer be visible
  waitFor(() => {
    expect(
      screen.queryByText('This is a description of Product 1.'),
    ).not.toBeInTheDocument();
  });
});

test('calls addToBasket when "Add to Basket" button is clicked', () => {
  render(<Product product={product} addToBasket={addToBasket} />);

  fireEvent.click(screen.getByText('Add to Basket'));

  expect(addToBasket).toHaveBeenCalledWith(product);
});
