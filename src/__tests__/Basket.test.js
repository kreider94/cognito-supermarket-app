import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Basket from '../components/Basket';

// define mock basket for testing
const mockBasketItems = [
  { id: 1, name: 'Test Product 1', price: 10 },
  { id: 2, name: 'Test Product 2', price: 20 },
];

test('renders basket items', () => {
  render(<Basket basketItems={mockBasketItems} removeFromBasket={() => {}} />);
  expect(screen.getByText('Test Product 1: $10')).toBeInTheDocument();
  expect(screen.getByText('Test Product 2: $20')).toBeInTheDocument();
});

test('removes item from basket', () => {
  const removeFromBasket = jest.fn();
  render(
    <Basket
      basketItems={mockBasketItems}
      removeFromBasket={removeFromBasket}
    />,
  );

  const removeButtons = screen.getAllByText('Remove');
  expect(removeButtons).toHaveLength(2);

  // click remove button for the first item
  fireEvent.click(removeButtons[0]);
  expect(removeFromBasket).toHaveBeenCalledWith(mockBasketItems[0].id);

  // click the remove button for the second item
  fireEvent.click(removeButtons[1]);
  expect(removeFromBasket).toHaveBeenCalledWith(mockBasketItems[1].id);
});
