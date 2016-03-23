import './css/animation.css';
import './css/style.less';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

const rootRoute = {
    component: 'div',
    childRoutes: [
        {
            path: '/',
            component: require('./components/App'),
            indexRoute: {
                component: require('./views/About')
            },
            childRoutes: [
                require('./routes/about'),
                require('./routes/inbox'),
                require('./routes/message'),
                {
                    path: '*',
                    component: require('./views/About')
                }
            ]
        }
    ]
};

// expose the jquery
window.$ = window.jQuery = jQuery;

ReactDom.render(
    <Router history={browserHistory} routes={rootRoute} />,
    document.getElementById('app')
);

