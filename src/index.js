import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import store from './store/index';
import { getCountries } from './actions/actions-countries';
import Navigation from './presentational/navigation.component';

render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory}>
                <Route path='/' component={Navigation}>

                </Route>
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());