const initialState = {
  age: 21,
};

const myReducer = (state, action) => {
  //   const newState = [...state];

  if (action.type === "ADD") {
    // newState.age += 1;
    return 21;
  }

  return 52;
};

export default myReducer;
