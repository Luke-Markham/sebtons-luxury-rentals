const INITIAL_STATE = {
  showFormSuccessMessage: false
};

const contactFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DISPLAY_FORM_SUCCESS_MESSAGE":
      return {
        ...state,
        showFormSuccessMessage: action.payload
      };
    default:
      return state;
  }
};

export default contactFormReducer;
