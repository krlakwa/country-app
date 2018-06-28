import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import store from './store/index';
import { getCountries } from './actions/actions-countries';

render(
    <Provider store={store}>
        <div>
            <h1>Project initialization</h1>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());