import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders particles canvas', () => {
  const { container } = render(<App />);
  expect(container.querySelector('canvas')).toBeInTheDocument();
});
