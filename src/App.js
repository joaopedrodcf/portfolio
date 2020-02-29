import Header from './components/header';
import Routes from './Routes';
import GlobalStyle from './globalStyle';
import Sidebar from './components/sidebar';
import React from 'react';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Sidebar>
                <Header />
                <Routes />
            </Sidebar>
        </>
    );
};

export default App;
