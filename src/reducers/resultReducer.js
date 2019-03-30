const resultReducer = (state = {
  total: 0,
  isEven: true
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        total: state.total + 1,
        isEven: !state.isEven
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        total: state.total - 1,
        isEven: !state.isEven
      };
      break;
  }
  return state;
}

export default resultReducer;