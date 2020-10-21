import React from 'react';

import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';
import { restaurantFixture } from '../fixtures/fixtures';

describe('RestaurantList', () => {
  const restaurantListRender = (restaurants) => render((
    <RestaurantList
      restaurants={restaurants}
    />
  ));

  context('with restaurants', () => {
    it('see renders restaurants', () => {
      const { container } = restaurantListRender(restaurantFixture);

      restaurantFixture.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });

  context('without restaurants', () => {
    const restaurants = [];

    it('nothing render restaurants', () => {
      const { container } = restaurantListRender(restaurants);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
