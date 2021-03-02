import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  setSelectedCategoryId,
  loadRestaurants,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const {
    categories,
    regions,
    selectedCategoryId,
  } = useSelector((state) => (
    {
      categories: state.categories,
      regions: state.regions,
      selectedCategoryId: state.selectedCategoryId,
    }
  ));
  function changeSelectedCategoryId(id) {
    dispatch(setSelectedCategoryId(id));
    const region = regions.find((v) => v.id === selectedRegionId);

    if (region) {
      dispatch(loadRestaurants());
    }
  }

  return (
    <Categories
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      onClick={changeSelectedCategoryId}
    />
  );
}
