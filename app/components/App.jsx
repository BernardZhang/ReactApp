import React from 'react';
import Header from './Header';

export default class App extends React.Component {
    getInitialState() {
        return {
            notes: [
                {
                    id: 1,
                    task: 'Learn Webpack'
                }
            ]
        };
    }

    render() {
        return (
            <div className="app-container">
                <Header selectedItem={this.props.location.pathname}/>
                {this.props.children || this.props.default}
            </div>
        );
    }
}