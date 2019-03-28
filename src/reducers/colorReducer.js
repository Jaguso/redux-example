const colorReducer = (state = {
  text: "Monty"
}, action) => {
  switch (action.type) {
    case "SET_TEXT":
      state = {
        ...state,
        text: action.payload
      };
      break;
  }
  return state;
};

export default colorReducer