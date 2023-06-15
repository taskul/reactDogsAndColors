import React from 'react';
import App from './App';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

test('renders App', function () {
  const { getByText } = render((
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  ));
  expect(getByText('This is the about page.')).toBeInTheDocument();
});

test('navbar links', () => {
  const { getByText } = render((
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  ));
  expect(getByText('This is the home page.')).toBeInTheDocument();
  const link = getByText('Contact');
  fireEvent.click(link);
  expect(getByText('This is the contact page.')).toBeInTheDocument();
})