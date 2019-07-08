import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const AboutMe = lazy(() => import('./pages/about-me'));
const Projects = lazy(() => import('./pages/projects'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={AboutMe} />
                <Route exact path="/projects" component={Projects} />
            </Switch>
        </Suspense>
    );
};

export default Routes;
