import React from 'react';
import ReactDOM from 'react-dom';

export default class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: this.props.expand
        };
    }

    render() {
        var isRoot = !!this.props.isRoot;
        var {data, onSelect, onEdit, onAdd, onDelete} = this.props;
        var that = this;
        var getClassName = function (node, isRoot) {
            var className = ['node'];

            if (isRoot) {
                className.push('node_root');
            }

            if (node.active) {
                className.push('node_active');
            }

            return className.join(' ');
        };

        return (
            <div className={getClassName(data, isRoot)} node-id={this.props.id}>
                <div className="node__text" 
                    onClick={this.onSelect.bind(this, data)}>{data.name}</div>
                {this.getToggleBtn(data, this.state.expand)}
            </div>
        );
    }

    getToggleBtn(node, expand) {
        if (node.children && node.children.length) {
            return <span className="toggle-btn" onClick={this.toggleExpand.bind(this, !expand, node)}>{expand ? '-' : '+'}</span>;
        }

        return '';
    }

    toggleExpand(isExpand, node) {
        node.expand = isExpand;
        this.setState({
            expand: isExpand
        });
        var nodeList = ReactDOM.findDOMNode(this).nextElementSibling;

        if (nodeList) {
            nodeList.style.cssText += 'display: ' + (isExpand ? 'inline-block' : 'none');    
        }

        if (typeof this.props.toggleExpand === 'function') {
            this.props.toggleExpand(isExpand, node);
        }

        return this;
    }

    onSelect(node) {
        node.active = true;
        if (typeof this.props.onSelect === 'function') {
            this.props.onSelect(node);
        }
    }
}