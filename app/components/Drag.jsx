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
            padding: '20px',
            width: '40%'
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
        var isTouch = 'ontouchstart' in document;
        console.log(':) isTouch' + isTouch);
        var EVENTS = {
            MOUSEDOWN: isTouch ? 'touchstart' : 'mousedown',
            MOUSEMOVE: isTouch ? 'touchmove' : 'mousemove',
            MOUSEUP: isTouch ? 'touchend' : 'mouseup'
        };
        var getPosition = function (e) {
            return 'ontouchstart' in document ? e.touches[0] : e;
        };

        var mousedownHandle = function (e) {
            e.preventDefault();
            isMousedown = true;
            console.log(e);
            var posObj = getPosition(e);
            pos = [posObj.pageX, posObj.pageY];
            console.log(':) mousedownHandle pos', pos);
            document.addEventListener(EVENTS.MOUSEMOVE, mousemoveHandle, false);
            document.addEventListener(EVENTS.MOUSEUP, mouseupHandle, false);
        };
        var mousemoveHandle = function (e) {
            e.preventDefault();
            if (isMousedown) {
                var posObj = getPosition(e);
                var distance = [posObj.pageX - pos[0], posObj.pageY - pos[1]];
                var style = window.getComputedStyle(moveElement);
                var rectBox = moveElement.getBoundingClientRect();
                var offset = [parseFloat(style.left), parseFloat(style.top)];
                var translate = {
                    x: offset[0] - rectBox.left,
                    y: offset[1] - rectBox.top
                };
                var left = offset[0] + distance[0];
                var top = offset[1] + distance[1];
              

                if (left <= translate.x) {
                    left = translate.x;
                    console.log(left);
                }

                if (left > window.innerWidth - rectBox.width + translate.x) {
                    left = window.innerWidth - rectBox.width + translate.x;
                    console.log('left:' + left);
                }

                if (top <= translate.y) {
                    top = translate.y;
                }

                if (top > window.innerHeight - rectBox.height + translate.y) {
                    top = window.innerHeight - rectBox.height + translate.y;
                }

                // left = Math.max(left, 0);
                // left = Math.min(left, window.innerWidth - rectBox.width);

                // top = Math.max(top, 0);
                // top = Math.min(top, window.innerHeight - rectBox.height);

                moveElement.style.left = left + 'px';
                moveElement.style.top = top + 'px';
                pos = [posObj.pageX, posObj.pageY];
                console.log('pos', pos);
                console.log(':) mousemoveHandle', distance, offset, [left, top]);
            }
        };
        var mouseupHandle = function (e) {
            e.preventDefault();
            console.log(': mouseupHandle');
            isMousedown = false;
            document.removeEventListener(EVENTS.MOUSEMOVE, mousemoveHandle);
            document.removeEventListener(EVENTS.MOUSEUP, mouseupHandle);
        };
        target.addEventListener(EVENTS.MOUSEDOWN, mousedownHandle, false);
        // document.addEventListener(EVENTS.MOUSEMOVE, mousemoveHandle, false);
        // document.addEventListener(EVENTS.MOUSEUP, mouseupHandle, false);
        // document.addEventListener('mouseup', mouseupHandle, false);
    }
}