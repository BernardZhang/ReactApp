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
            childRoutes: [
                require('./routes/about'),
                require('./routes/inbox'),
                require('./routes/message')
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

