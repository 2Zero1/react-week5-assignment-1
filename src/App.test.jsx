import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        {
          id: 1, name: '분식집',
        },
      ],
      regions: [
        {
          id: 1, name: '서울',
        },
        {
          id: 2, name: '경기도',
        },
      ],
      restaurants: [],
      selectedCategoryId: 0,
      selectedRegionId: '',
    }));
  });

  it('categories', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('분식집')).not.toBeNull();
  });
  it('show regions', () => {

    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('경기도')).not.toBeNull();
  });

  describe('restaurants', () => {
    context('when category and region are both selected', () => {
      it('show restaurants list', () => {
        useSelector.mockImplementation((selector) => selector({
          restaurants: [
            {
              id: 1, name: '양천주가',
            },
          ],
          categories: [],
          regions: [],
          restaurant: {},
          selectedCategoryId: 1,
          selectedRegionId: '서울',
        }));
  
        const { getByText } = render((
          <App />
        ));
  
        expect(getByText(/양천주가/)).not.toBeNull();
      });
    });
  });
});
