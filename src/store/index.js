//import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

// creating a slice of global state
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducer: {
        increment(state) {
            /*return {
                counter: state.counter + 1
            }*/
             state.counter++;    // mutating the state is BAD, but redux toolit uses an internal package
            // in the background which translates this code to immutable code, so this line here can be used with redux toolkit, no need to return object, as it was required without slices! *
        },
        decrement(state) {
            /*return {
                counter: state.counter - 1
            }*/
            state.counter--;
        },
        increase(state, action) {
            /*return {
                counter: state.counter + action.payload
            }*/
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            /*return {
                showCounter: !state.showCounter
            }*/
            state.showCounter = !state.showCounter;
        }
    }
});

// auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducer: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

//const counterReducer = (state = initialState, action) => {     // default 0 value for first run
//    if(action.type === INCREMENT) {
//        return {
//            counter: state.counter + 1,
//            showCounter: state.showCounter
//        }
//    }
//
//    if(action.type === 'increase') {
//        return {
//            counter: state.counter + action.amount,
//            showCounter: state.showCounter
//        }
//    }
//
//    if(action.type === 'decrement') {
//        return {
//            counter: state.counter - 1,
//            showCounter: state.showCounter
//        }
//    }
//
//    if(action.type === 'toggle') {
//        return {
//            counter: state.counter,
//            showCounter: !state.showCounter
//        }
//    }
//
//    return state;
//}

//const store = createStore(counterReducer);
const store = configureStore({
    // can pass multiple reducers with unique keys in an object, then configureStore will merge all reducerst into one, if we would have more than 1 reducers
    // now with multiple reducers the way we access state.counter in Counter.js changes to: state.counter.counter
    // it references to the store's reducer's counter, which has an initialState with the property called counter
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

/* const subscriber = () => {
    const currentState = store.getState();
}

store.subscribe(subscriber); */