import { createStore } from 'redux';

const counterReducer = (state = { counter: 0}, action) => {     // default 0 value for first run
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    
    if(action.type === 'increase') {
        return {
            counter: state.counter + action.amount
        }
    }
    
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    return state;
}

const store = createStore(counterReducer);
console.log('store:', store.getState());

export default store;

/* const subscriber = () => {
    const currentState = store.getState();
}

store.subscribe(subscriber); */