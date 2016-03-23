import './dialog.less';
import React from 'react';

export default class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var open = this.props.open;
        var {data, open, onClose} = this.props;

        if (!open) {
            return null;
        }
        return (
            <div className={'dialog-mask animated' + (open ? ' fadeIn' : ' fadeOut')} ref="dialog">
                <div className="dialog">
                    <div className="dialog-header">
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
            this.refs.dialog.addEventListener('animationend', this.animationDone.bind(this), false);    
        }
    }

    componentWillUnmount() {
        if (this.refs.dialog) {
            this.refs.dialog.removeEventListener('animationend', this.animationDone.bind(this), false);    
        }
    }

    animationDone() {
        this.refs.dialog.style.cssText += 'display: ' + (this.state.open ? 'block' : 'none');
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