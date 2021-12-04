const redux = require("redux");

//reducer will be called by Redux library
//inputs:  old state + Dispatched Action
const counterReducer = (state = { counter: 0 }, action) => {
  console.log("action", action);
  if (action.type == "increment") {
    return {
      counter: state.counter + 1, // based on the old state
    };
  }
  return state; //  By now, the initial state will return the original state
};

//inputs: reducer function
const store = redux.createStore(counterReducer);

//Reducer will setup the logic how to return the initial state
console.log("init --", store.getState());

// Define a  Subscriber of the Redux?
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log("counterSubscriber", latestState);
};
// Define another subscriber
const AnotherCounterSubscriber = () => {
  const latestState = store.getState();
  console.log("AnotherCounterSubscriber", latestState);
};

// Make the redux to aware who is subscribing it

store.subscribe(counterSubscriber);
store.subscribe(AnotherCounterSubscriber);

store.dispatch({ type: "increment" });
