import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { setSelectedRegionId, loadRestaurants } from './actions';

import { get } from './utils';


export default function RegionsContainer() {
  const dispatch = useDispatch();
  const regions = useSelector(get('regions'));
  const selectedRegionId = useSelector(get('selectedRegionId'));

  function changeSelectedRegionId(id) {
    dispatch(setSelectedRegionId(id));
    dispatch(loadRestaurants());
  }

  return (
    <Regions
      regions={regions}
      selectedRegionId={selectedRegionId}
      onClick={changeSelectedRegionId}
    />
  );
}
