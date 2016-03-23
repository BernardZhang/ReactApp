import './mindmap.less';
import React from 'react';
import Node from './Node';
import NodeList from './NodeList';

export default class Mindmap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: this.props.expand
        };
    }

    render() {
        var {data, expand, expandLevel, onSelect, onMouseup, onEdit, onAdd, onDelete} = this.props;
        var level = 1;

        expand = typeof data.expand !== 'undefined' ? !!data.expand : this.state.expand;
        if (typeof expandLevel !== 'undefined') {
            expand = expand && level < expandLevel;
        }

        return (
            <div className="mindmap">
                <Node isRoot={true} data={data}
                    expand={expand}
                    expandLevel={expandLevel}
                    onSelect={this.onSelect.bind(this, data)}
                    onEdit={onEdit}
                    onAdd={onAdd}
                    onDelete={onDelete} />
                <NodeList nodes={data.children}
                    level={level}
                    expand={expand}
                    expandLevel={expandLevel}
                    onSelect={this.onSelect.bind(this)}
                    onEdit={onEdit}
                    onAdd={onAdd}
                    onDelete={onDelete} />
            </div>
        );
    }

    onSelect(node) {
        this.setActiveNode(node);
        if (typeof this.props.onSelect === 'function') {
            this.props.onSelect(node);
        }
    }

    toggleExpand(isExpand, node) {
        this.setState({
            expand: isExpand
        });
    }

    setActiveNode(node) {
        if (this.props.singleSelection && this.activeNode) {
            this.activeNode.active = false;
        }
        node.active = true;
        this.activeNode = node;
        return this;
    }

    getActiveNode() {
        return this.activeNode;
    }
}