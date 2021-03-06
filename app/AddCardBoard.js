import React, {Component} from 'react';
import update from 'immutability-helper';
import TaskList from './AddTask';


const taskInitialItem = {
    id: 1,
    name: "",
    done: false
}

class AddCardBoard extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            id: null,
            title: '',
            description: '',
            status: this.props.listStatus,
            tasks: [taskInitialItem]
        }
    };

    _onChange(taskId,e) {
        var state = {};
        if(e && e.target.name == 'tasks'){
            const taskItemType = e.target.type == 'checkbox' ? 'done': 'name'
            const taskItemValue = e.target.type == 'checkbox' ? e.target.checked : e.target.value
            const taskIndex = this.state.tasks.findIndex((task) => task.id == taskId )
            let nextState = update(this.state.tasks, {
                [taskIndex]: {
                    [taskItemType]: {
                        $set: taskItemValue
                    }
                }
            })
            this.setState({tasks: nextState})
        } else {
            state[e.target.name] =  (e.target.value).trim();
            this.setState(state);
        }
    };
    addTask(){
        const task = Object.assign({}, taskInitialItem)
        task.id = this.state.tasks.length + 1;
        const nextStatus = update(this.state.tasks, {
            $push: [task]
        })
        this.setState({tasks: nextStatus}, () => {
        })
    }

    handleAddCard(){
        this.props.addCardBoradDisplay()
        this.props.callBackfunc.addCardAndTask(this.state)
    }

    render(){
        return (
           <form className = "addItem">
                <label>title</label><input name="title" onChange={this._onChange.bind(this,null)} />
                <label>description</label><input name="description" onChange={this._onChange.bind(this,null)}/>
                <TaskList taskList = {this.state.tasks} 
                          callBackfunc = {this.props.callBackfunc}
                          onChange = {this._onChange.bind(this)}/>
                <a onClick = {this.addTask.bind(this)}> + add card</a>
                <a onClick = { this.handleAddCard.bind(this)} type="submit">save card</a>
            </form>
        )
    }
}

export default AddCardBoard;