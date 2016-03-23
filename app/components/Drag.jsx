import React from 'react';

export default class Drag extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            position: 'absolute',
            left: 0,
            top: 0,
            background: 'yellow',
            border: '1px solid green',
            padding: '20px'
        };

        return (
            <div ref="target" style={style}>
                <h3 ref="drag">Drag me</h3>
                <div>
                    Moving......
                    Moving......
                    Moving......
                    Moving......
                    Moving......
                    Moving......
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.drag(this.refs.drag, this.refs.target);
    }

    drag(target, moveElement) {
        var isMousedown = false;
        var pos = [];

        var mousedownHandle = function (e) {
            console.log(':) mousedownHandle');
            isMousedown = true;
            console.log(e);
            pos = [e.pageX, e.pageY];
            document.addEventListener('mousemove', mousemoveHandle, false);
            document.addEventListener('mouseup', mouseupHandle, false);
        };
        var mousemoveHandle = function (e) {
            if (isMousedown) {
                var distance = [e.pageX - pos[0], e.pageY - pos[1]];
                var style = window.getComputedStyle(moveElement);
                var rectBox = moveElement.getBoundingClientRect();
                var offset = [parseFloat(style.left), parseFloat(style.top)];
                // var offset = [rectBox.left, rectBox.top];
                var left = offset[0] + distance[0];
                var top = offset[1] + distance[1];

                if (rectBox.left + distance[0] <= 0) {
                    left -= rectBox.left + distance[0];
                }

                if (rectBox.left + distance[0] > window.innerWidth - rectBox.width) {
                    left -= rectBox.left + distance[0] - (window.innerWidth - rectBox.width);
                }

                if (rectBox.top + distance[1] <= 0) {
                    top -= rectBox.top + distance[1];
                }

                if (rectBox.top + distance[1] > window.innerHeight - rectBox.height) {
                    top -= rectBox.top + distance[1] - (window.innerHeight - rectBox.height);
                }


                // left = Math.max(left, 0);
                // left = Math.min(left, window.innerWidth - rectBox.width);

                // top = Math.max(top, 0);
                // top = Math.min(top, window.innerHeight - rectBox.height);

                moveElement.style.left = left + 'px';
                moveElement.style.top = top + 'px';
                pos = [e.pageX, e.pageY];
                console.log(':) mousemoveHandle', distance);
            }
        };
        var mouseupHandle = function (e) {
            console.log(': mouseupHandle');
            pos = [e.pageX, e.pageY];
            isMousedown = false;
            document.removeEventListener('mousemove', mousemoveHandle);
            document.removeEventListener('mouseup', mouseupHandle);
        };
        target.addEventListener('mousedown', mousedownHandle, false);
        // document.addEventListener('mouseup', mouseupHandle, false);
    }
}