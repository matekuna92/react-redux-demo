import React, { Fragment } from 'react';

import Counter from './components/Counter';
import CounterClassBasedRedux from "./components/CounterClassBasedRedux";


function App() {
    return (
        <Fragment>
            <Counter />
            <CounterClassBasedRedux />
        </Fragment>
    );
}

export default App;
