import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

function setComponent( categories, selectedCategoryId, handleClick) {
  return render((
    <Categories
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      onClick={handleClick}
    />
  ));
}

describe('Categories', () => {
  const categories = [
    { id: 1, name: '한식' },
  ];

  it('renders all categories', () => {
    const selectedCategoryId = 0;
    const handleClick = jest.fn();
    const { getByText } = setComponent(categories, selectedCategoryId, handleClick);
    expect(getByText('한식')).not.toBeNull();
  });

  context('without selected category', () => {
    it('renders name without (v)', () => {
      const selectedCategoryId = 0;
      const handleClick = jest.fn();
      const { getByText } = setComponent(categories, selectedCategoryId, handleClick);

      expect(getByText('한식')).not.toBeNull();
    });
  });

  context('when category is selected', () => {
    it('append (v) after name', () => {
      const selectedCategoryId = 1;
      const handleClick = jest.fn();
      const { getByText } = setComponent(categories, selectedCategoryId, handleClick);

      expect(getByText('한식(v)')).not.toBeNull();
    });
  });

  context('when category is clicked', () => {
    it('append (v) after category name', () => {
      const handleClick = jest.fn();
      const selectedCategoryId = 0;
      const { getByText } = setComponent(categories, selectedCategoryId, handleClick);

      expect(getByText('한식')).not.toBeNull();
      fireEvent.click(getByText('한식'));
      expect(handleClick).toBeCalled();
    });
  });
});
