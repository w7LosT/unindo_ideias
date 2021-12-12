import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
const { render, screen, waitForElementToBeRemoved } = require("@testing-library/react");
import { Home } from '.';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
