import React from 'react';
import { Route, IndexRoute } from 'react-router';
import style from './country.css';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import CountryFlagContainer from './containers/flag-container.component';
import CountryDetailsContainer from './containers/country-detail-container.component';
import ContinentsContainer from './containers/continents-containter.component';

export default (
    <Route style={style} path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='countries' >
            <IndexRoute component={CountryFlagContainer} />
            <Route path='country/:id' component={CountryDetailsContainer} />
        </Route>
        <Route path='continents' component={ContinentsContainer} />
        <Route path='contact' component={Contact} />
        <Route path='*' component={NotFound} />
    </Route>
);