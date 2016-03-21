import React from 'react';
import '../css/cube.less';

export default class Cube extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="cube-container">
                <div className="edge up"></div>
                <div className="edge down"></div>
                <div className="edge front"></div>
                <div className="edge back"></div>
                <div className="edge left"></div>
                <div className="edge right"></div>
                <div className="edge center">Hello Cube</div>
            </div>
        );
    }
}
