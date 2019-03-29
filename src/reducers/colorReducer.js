const colorReducer = (state = {
  text: "Monty",
  isTrue: true
}, action) => {
  switch (action.type) {
    case "SET_TEXT":
      state = {
        ...state,
        text: action.payload,
      };
      break;
    case "CHANGE_BOOLEAN":
      state = {
        ...state,
        isTrue: !state.isTrue
      }
  }
  return state;
};

export default colorReducer