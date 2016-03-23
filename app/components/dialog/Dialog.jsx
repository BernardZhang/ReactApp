import './dialog.less';
import React from 'react';
import Drag from '../Drag';

export default class Dialog extends /*React.Component*/Drag {
    constructor(props) {
        super(props);
    }

    render() {
        var open = this.props.open;
        var {data, open, onClose} = this.props;

        return (
            <div className={'dialog-mask animated' + (open ? ' fadeIn' : ' fadeOut')} ref="dialog">
                <div className="dialog" ref="target">
                    <div ref="drag" className="dialog-header">
                        <h3>{data.title}</h3>
                        <span className="close-icon" onClick={this.onClose.bind(this)}>x</span>
                    </div>
                    <div className="dialog-body">{data.content}</div>
                    <div className="dialog-footer">
                        <span className="button" onClick={this.onConfirm.bind(this)}>{data.confirmText || '确定'}</span>
                        <span className="button" onClick={this.onCancel.bind(this)}>{data.cancelText || '取消'}</span>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        if (this.refs.dialog) {
            this.drag(this.refs.drag, this.refs.target);
            console.log(':) drag', this.refs.drag, this.refs.target);
            this.drag(this.refs.drag, this.refs.target);
            this.refs.dialog.addEventListener('animationend', this.animationDone.bind(this), false);    
        }
    }

    componentDidUpdate() {
        console.log('will did update');
    }

    componentWillUnmount() {
        if (this.refs.dialog) {
            this.refs.dialog.removeEventListener('animationend', this.animationDone.bind(this), false);    
        }
    }

    animationDone() {
        console.log(':) animationDone');
        this.refs.dialog.style.cssText += 'display: ' + (this.props.open ? 'block' : 'none');
    }

    onDrag() {
        console.log('onDrag', arguments);
    }

    onClose() {
        this.close();
    }

    onConfirm() {
        this.close();
    }

    onCancel() {
        this.close();
    }

    close() {
       this.props.onClose && this.props.onClose();
    }
}