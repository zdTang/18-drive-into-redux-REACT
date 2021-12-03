const redux = require("redux");

//reducer will be called by Redux library
//inputs:  old state + Dispatched Action
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state + 1, // based on the old state
  };
};

//inputs: reducer function
const store = redux.createStore(counterReducer);

console.log(store.getState());

// Define a  Subscriber of the Redux?
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Make the redux to aware who is subscribing it

store.subscribe(counterSubscriber);
