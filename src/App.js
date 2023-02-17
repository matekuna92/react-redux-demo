import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import CounterClassBasedRedux from "./components/CounterClassBasedRedux";
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    return (
        <Fragment>
            <Header />
            {!isAuth && <Auth />}
            {isAuth && <UserProfile />}
            <Counter />
            {/* <CounterClassBasedRedux /> */}
        </Fragment>
    );
}

export default App;
