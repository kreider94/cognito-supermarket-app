import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Basket from '../components/Basket';

// define mock basket for testing
const basketItems = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
];

test('renders basket items', () => {
  render(<Basket basketItems={basketItems} removeFromBasket={() => {}} />);
  expect(screen.getByText('Product 1: $10')).toBeInTheDocument();
  expect(screen.getByText('Product 2: $20')).toBeInTheDocument();
});

test('removes item from basket', () => {
  const removeFromBasket = jest.fn();
  render(
    <Basket basketItems={basketItems} removeFromBasket={removeFromBasket} />,
  );

  const removeButtons = screen.getAllByText('Remove');
  expect(removeButtons).toHaveLength(2);

  // click remove button for the first item
  fireEvent.click(removeButtons[0]);
  expect(removeFromBasket).toHaveBeenCalledWith(basketItems[0].id);

  // click the remove button for the second item
  fireEvent.click(removeButtons[1]);
  expect(removeFromBasket).toHaveBeenCalledWith(basketItems[1].id);
});
