const INITIAL_STATE = {
  displayMobileNav: false
};

const navReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_MOBILE_NAV":
      return {
        ...state,
        displayMobileNav: !state.displayMobileNav
      };
    default:
      return state;
  }
};

export default navReducer;
