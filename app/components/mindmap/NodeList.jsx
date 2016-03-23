import React from 'react';
import ReactDOM from 'react-dom';
import Node from './Node';

export default class NodeList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {nodes, expand, level, expandLevel, onSelect, onEdit, onAdd, onDelete} = this.props;

        if (nodes && nodes.length) {
            var nodeList = nodes.map(
                (node) =>
                    <li className="children__item" key={node.id}>
                    <Node 
                        data={node}
                        expand={this.isExpand(node)}
                        onSelect={onSelect}
                        onEdit={onEdit.bind(null, node)}
                        onAdd={onAdd.bind(null, node)}
                        onDelete={onDelete.bind(null, node)} />
                    <NodeList 
                        nodes={node.children}
                        expand={this.isExpand(node)}
                        expandLevel={expandLevel}
                        level={level + 1}
                        onSelect={onSelect}
                        onEdit={onEdit.bind(null, node)}
                        onAdd={onAdd.bind(null, node)}
                        onDelete={onDelete.bind(null, node)} /> 
                    </li>,
                this
            );
            var style = {
                display: expand ? 'inline-block' : 'none'
            };
            console.log('display: ' + style.display);

            return (
                <ol className={'children level-' + level} style={style}>
                {nodeList}
                </ol>
            );
        }

        return null;
    }

    toggleExpand(expand, node) {
        var nodeList = ReactDOM.findDOMNode(this);
        node.expand = expand;
        if (typeof this.props.toggleExpand === 'function') {
            this.props.toggleExpand(expand, node);
        }
    }

    isExpand(node) {
        var {expand, level, expandLevel} = this.props;
        var isExpand = typeof node.expand !== 'undefined' ? !!node.expand : expand;
        
        if (typeof expandLevel !== 'undefined') {
            isExpand = isExpand && (level < expandLevel);
        }
        
        return isExpand;
    }
}