import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { ContextProvider } from './store';
import ScrollToTop from './components/shared/scroll-to-top';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <ContextProvider>
                <ApolloProvider client={client}>
                    <App />
                </ApolloProvider>
            </ContextProvider>
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
