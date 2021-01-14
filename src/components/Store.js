import { createStore } from "redux";
import myReducer from "../reducers/Reducer";

const store = createStore(myReducer);

store.subscribe(() => {
  console.log("State is: " + JSON.stringify(store.getState()));
});

store.dispatch({ type: "sub" });

export default store;
