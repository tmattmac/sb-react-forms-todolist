import { render } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
});

test('render matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});