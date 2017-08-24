import React, {Component} from 'react';
import TaskItem from './AddTask';

class AddItem extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            tasks: [{
                id: 1,
                name: '',
                done: false
            }]
        }
    };
    handleAddTask(){
        const id = this.state.tasks.length + 1;
        const task = {
            id: id,
            name: '',
            done: false
        }
        this.state.tasks.push(task);
        this.setState({tasks: this.state.tasks})
    };
    
    handleSaveTask(){
        this.props._handleKeyPress()
    };

    handleChange(task){
        this.state.tasks[task.name] = task.name;
        this.state.tasks[task.done] = task.done;
        this.setState({tasks: this.state.tasks})
    };

    render(){
        var taskCollection = this.state.tasks.map((task)=>{
            return (<TaskItem key={task.id}
                              id={task.id}
                              name ={task.name}
                              done= {task.done}
                              handleChange={this.handleChange.bind(this, task)}/>)
        });

        return (
            <form className = "addItem">
                <label>title</label><input />
                <ul className = "task-list">
                    <label>tasks</label>
                    {taskCollection}
                </ul>
                <button onClick = {this.handleAddTask.bind(this)}> + add task</button>
                <button onClick = {this.handleSaveTask.bind(this)} type="submit">  save task</button>
            </form>
        )
    }
}

export default AddItem;