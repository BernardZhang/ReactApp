import React from 'react';
import Header from './header/Header';
import About from '../views/About';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var items = [
            {
                to: '/about',
                name: 'About'
            },
            {
                to: '/inbox',
                name: 'Inbox'
            },
            {
                to: '/message',
                name: 'Message'
            },
            {
                to: '/test',
                name: 'Test'
            }
        ];
        return (
            <div className="app-container">
                <Header items={items} selectedItem={this.props.location.pathname}/>
                {this.props.children || this.props.default || <About/>}
            </div>
        );
    }
}

module.exports = App;