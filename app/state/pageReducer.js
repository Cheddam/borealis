const pageReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return { pages: [] };
  }

  switch (action.name) {
    case 'ADD_PAGE':
      return {...state, pages: [...state.pages, action.payload]};
    default:
      return state;
  }
};

export default pageReducer;