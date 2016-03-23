import React from 'react';
import Mindmap from '../components/mindmap/Mindmap';
import Dialog from '../components/dialog/Dialog';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        console.log('About constructor', props);
        this.state = {
            title: 'About',
            mindmap: {},
            editDialog: {
                open: false,
                title: '',
                content: ''
            }
        };
    }

    // getInitialState() {
    //     console.log('About getInitialState', arguments);
    // }

    componentDidMount() {
        this.setState({
            mindmap: {
                id: '1',
                name: 'node1',
                children: [
                    {
                        id: '11',
                        name: 'node11',
                        children: [
                            {
                                id: '111',
                                name: 'node111',
                                children: [
                                    {
                                        id: '1111',
                                        name: 'node-1111',
                                        children: [
                                            {
                                                id: '11111',
                                                name: 'node-11111'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: '112',
                                name: 'node112'
                            }
                        ]
                    }
                ]
            }
        });
        console.log('about componentDidMount');
    }

	render() {
		return (
            <div>
                <h3>{this.state.title}</h3>
                <Mindmap
                    data={this.state.mindmap}
                    singleSelection={true}
                    expand={true}
                    expandLevel={2}
                    onSelect={this.onSelect.bind(this)}
                    onEdit={this.onEdit}
                    onAdd={this.onAdd}
                    onDelete={this.onDelete} />
                <Dialog data={this.state.editDialog} onClose={this.onCloseDilog.bind(this)} open={this.state.editDialog.open} />
            </div>
        );
	}

    onSelect(node) {
        this.setState({
            mindmap: this.state.mindmap,
            editDialog: {
                open: true,
                title: node.id,
                content: node.name
            }
        });
    }

    onEdit(node) {
        console.log(node);
    }

    onAdd(node) {
        console.log(node);
    }

    onDelete(node) {
        console.log(node);
    }

    onCloseDilog() {
        this.setState({
            editDialog: {
                open: false
            }
        });
    }
}