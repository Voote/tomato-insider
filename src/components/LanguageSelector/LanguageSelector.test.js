import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LanguageSelector from './LanguageSelector';

test('renders language buttons and calls onLanguageChange function', () => {
  const onLanguageChange = jest.fn();
  const { getByText } = render(
    <LanguageSelector language="en" onLanguageChange={onLanguageChange} />
  );

  const enButton = getByText('EN');
  const esButton = getByText('ES');
  const plButton = getByText('PL');

  expect(enButton).toBeInTheDocument();
  expect(esButton).toBeInTheDocument();
  expect(plButton).toBeInTheDocument();

  fireEvent.click(esButton);
  expect(onLanguageChange).toHaveBeenCalledWith('es');
});
