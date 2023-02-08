import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Counter.module.css';

class CounterClassBasedRedux extends Component {
    incrementHandler() {
        this.props.increment();
    }

    decrementHandler() {
        this.props.decrement();
    }

    // we recieve the counter through props, because of mapping the counter state to the counter prop inside mapStateToProps !!
    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
            </main>
        );
    };
};

// store state and dispatch in props - cant use hooks in class based components, this is the equvivalent of useSelector and useDispatch hooks
const mapStateToProps = state => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'increment' }),
        decrement: () => dispatch({ type: 'decrement' })
    };
};

// in the CounterClassBasedRedux class we have certain props, which we can execute as a function,
// which will then -when executed- dispatch an action to the redux store
// setting up subscription is also automatic, just as with hooks
export default connect(mapStateToProps, mapDispatchToProps)(CounterClassBasedRedux);
