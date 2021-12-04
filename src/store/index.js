//import redux from "redux";
import { createStore } from "redux";

// define reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// use reducer to init Redux store
const store = createStore(counterReducer);

export default store;

/*==========  the following lines are supposed to be used in components

//  define subscriber
const counterSubscriber = () => {
  const latestState = store.getState();
};

// bind store with subscriber
store.subscribe(counterSubscriber);

// store dispatch Action
store.dispatch({ type: "increment" });

*/
