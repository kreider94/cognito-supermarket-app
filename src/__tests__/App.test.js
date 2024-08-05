import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from '../App';

jest.mock('axios');

const mockProducts = [
  { id: 1, name: 'Test Product 1', price: 10 },
  { id: 2, name: 'Test Product 2', price: 20 },
];

test('renders products after successful API call', async () => {
  axios.get.mockResolvedValueOnce({ data: mockProducts });

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('Test Product 1: $10')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2: $20')).toBeInTheDocument();
  });
});

test('renders error message after failed API call', async () => {
  axios.get.mockRejectedValueOnce(new Error('Network Error'));

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('Error fetching data')).toBeInTheDocument();
  });
});
