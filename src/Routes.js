import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const AboutMe = lazy(() => import('./pages/about-me'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={AboutMe} />
            </Switch>
        </Suspense>
    );
};

export default Routes;
