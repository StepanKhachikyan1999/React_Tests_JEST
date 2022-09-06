import { render, screen } from '@testing-library/react';
import App from './App';

test('App component', () => {
  render(<App />);
  
  expect(screen.getByRole('list')).toBeInTheDocument
});
