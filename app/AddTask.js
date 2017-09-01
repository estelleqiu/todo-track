import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

class TaskList extends Component{
    constructor(){
        super(...arguments);
    };

    render(){
        let taskCollection = this.props.taskList.map((task,taskIndex) => {
            return (<li key= {task.id}
                        id = {task.id}
                        className = "task-item">
                        <input className = "task-checkbox" name = 'tasks'  type="checkbox" onChange={this.props.onChange.bind(null, task.id)}/>
                        <input className = "task-name" name = "tasks" onChange={this.props.onChange.bind(null, task.id)}/>
                    </li>
            )
        })
        return (
            <ul className = "task-list">
                <label>tasks</label>
                <CSSTransitionGroup 
                    transitionName ="toggle" 
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {taskCollection}
                </CSSTransitionGroup >
            </ul>
        )
    }
}

export default TaskList;