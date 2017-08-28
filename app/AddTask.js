import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

class TaskList extends Component{
    constructor(){
        super(...arguments);
    };

    render(){
        let taskCollection = this.props.taskList.map((task) => {
            return (<li key= {task.id}
                        id = {task.id}
                        className = "task-item">
                        <input className = "task-checkbox" type="checkbox" onChange = {this.props}/>
                        <input className = "task-name"/>
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