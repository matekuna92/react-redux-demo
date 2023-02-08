import React, { Fragment } from 'react';

import Counter from './components/Counter';
import CounterClassBasedRedux from "./components/CounterClassBasedRedux";
import Auth from './components/Auth';
import Header from './components/Header';


function App() {
    return (
        <Fragment>
            <Header />
            <Auth />
            <Counter />
            <CounterClassBasedRedux />
        </Fragment>
    );
}

export default App;
