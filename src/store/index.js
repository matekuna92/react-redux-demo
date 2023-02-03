import {createStore } from 'redux';

const counterReducer = (state = { counter: 0}, action) => {     // default 0 value for first run
    if(action.type === 'increase') {
        return {
            counter: state.counter + 1
        }
    }
    else if(action.type === 'decrease') {
        return {
            counter: state.counter - 1
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;

/* const subscriber = () => {
    const currentState = store.getState();
}

store.subscribe(subscriber); */