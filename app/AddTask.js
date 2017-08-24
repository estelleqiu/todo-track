import React, {Component} from 'react';

class TaskItem extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            Id: this.props.id,
            Name: 'this.props.name',
            Done: 'this.props.done'
        }
    };
    handleChange(type, event){
        this.setState({[type]: event.target.value},()=> console.log(this.state))
        this.props.handleChange(this.state)
    };
    render(){
        return (
            <li id = {this.props.id} className = "task-item">
                <input className = "task-checkbox" type="checkbox" onChange={this.handleChange.bind(this,'Done')}/>
                <input className = "task-name" onChange={this.handleChange.bind(this,'Name')}/>
            </li>
        )
    }
}

export default TaskItem;