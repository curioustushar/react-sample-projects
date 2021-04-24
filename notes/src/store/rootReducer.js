const initialState = { viewStyle: 'grid', showDrawer: false };

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_VIEW_STYLE': {
      const viewStyle = state.viewStyle === 'grid' ? 'list' : 'grid';
      return { ...state, viewStyle };
    }
    case 'TOGGLE_DRAWER': {
      return { ...state, showDrawer: !state.showDrawer };
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
