import React from 'react'
import { render, screen , waitFor} from '@testing-library/react'

import App from './App'

test('renders learn react link', async () => {
  await waitFor(() => render(<App />));
  const linkElement = screen.getByPlaceholderText("Github's username")
  expect(linkElement).toBeInTheDocument()
})
