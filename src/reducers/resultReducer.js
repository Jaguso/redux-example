const resultReducer = (state = {
  total: 0
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        total: state.total + 1
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        total: state.total - 1
      };
      break;
  }
  return state;
}

export default resultReducer;