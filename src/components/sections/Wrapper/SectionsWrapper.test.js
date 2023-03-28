import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionsWrapper from './SectionsWrapper';

// test-data.js
export const sampleData = [
    {
      title: "Small Tomatoes",
      description: "Small tomatoes are perfect for salads.",
      extra: "Varieties include cherry and grape tomatoes.",
      examples: ["Sweet 100", "Sun Gold", "Black Cherry"],
    },
    {
      title: "Medium Tomatoes",
      description: "Medium tomatoes are versatile in the kitchen.",
      extra: "Varieties include slicing and heirloom tomatoes.",
      examples: ["Brandywine", "Green Zebra", "San Marzano"],
    },
  ];
  

test('renders section title and cards with correct data', () => {
  const { getByText, getAllByTestId } = render(
    <SectionsWrapper title="Tomato Categories" data={sampleData} />,
  );

  const sectionTitle = getByText('Tomato Categories');
  expect(sectionTitle).toBeInTheDocument();

  const cards = getAllByTestId('section-card');
  expect(cards.length).toBe(sampleData.length);

  sampleData.forEach((category, index) => {
    const cardTitle = getByText(category.title);
    const cardDescription = getByText(category.description);
    const cardExtra = getByText(category.extra);
    const cardExamples = getByText(category.examples.join(', '));

    expect(cardTitle).toBeInTheDocument();
    expect(cardDescription).toBeInTheDocument();
    expect(cardExtra).toBeInTheDocument();
    expect(cardExamples).toBeInTheDocument();
  });
});
