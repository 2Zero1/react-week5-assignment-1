const intialState = {
  newId: 100,
  restaurants: [],
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  categories: [],
  selectedCategoryId: 0,
  regions: [],
  selectedRegionId: 0,
};

const reducers = {
  setRestaurants(state, action) {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  },
  changeRestaurantField(state, action) {
    const { name, value } = action.payload;
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  },
  addRestaurant(state) {
    const { newId, restaurants, restaurant } = state;
    return {
      ...state,
      newId: newId + 1,
      restaurants: [...restaurants, { ...restaurant, id: newId }],
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
    };
  },
  setCategories(state, action) {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  },
  setSelectedCategoryId(state, action) {
    const { id } = action.payload;
    return {
      ...state,
      selectedCategoryId: id,
    };
  },
  setRegions(state, action) {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  },
  setSelectedRegionId(state, action) {
    const { id } = action.payload;
    return {
      ...state,
      selectedRegionId: id,
    };
  },
}

function defaultReducer(state) {
  return state;
}

export default function reducer(state = intialState, action = {}) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
