import React, {Component} from 'react';

class Task extends Component{
    constructor(){
        super(...arguments);
        this.state = {tasks: this.props.tasks};
    };

    handleRemove(item){
        var items = this.state.tasks.filter((itm)=> {return item.id !== itm.id;})
        this.setState({tasks: items});
    };

    handleInputChange(taskIndex, e){
        const taskType = e.target.type == 'checkbox' ? 'done': 'name'
        const taskValue = e.target.type == 'checkbox' ? e.target.checked : e.target.value 
        this.props.callBackfunc.toggleCardAndTask(this.props.cardId ,taskIndex, taskType, taskValue)
    }

    render(){
        let task  = (
            this.state.tasks.map((task, taskIndex) => {
                return (
                    <li key= {task.id} id = {task.id}>
                        <input type="checkbox" onChange = {this.handleInputChange.bind(this,taskIndex)} defaultChecked = {task.done} />
                        <input ref= "taskName" className="taskName" onChange = {this.handleInputChange.bind(this,taskIndex)}  defaultValue = {task.name}/>
                        <a href="#" className="checklist__task--remove" onClick={
                            this.handleRemove.bind(this, task)}/>
                    </li>
                )}
            )
        );
        return (
            <ul className = "checklist__task">
                {task}
            </ul>
        )
    }
}

export default Task;