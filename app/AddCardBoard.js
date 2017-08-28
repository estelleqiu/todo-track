import React, {Component} from 'react';
import update from 'immutability-helper';
import TaskList from './AddTask';

class AddCardBoard extends Component{
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
        const taskItem = {
            id: id,
            name: '',
            done: false
        }

        let nextState = update(this.state.tasks, {
          $push: [taskItem]
        })

        this.setState({tasks: nextState})
    }

    getTaskInfo(cardId, taskIndex, taskName){
        return cardId, taskIndex, taskName
    }

    handleSaveTask(){
        this.props.handleSaveTask(getTaskInfo())
    }
    render(){
        return (
           <form className = "addItem">
                <label>title</label><input />
                <TaskList taskList = {this.state.tasks} 
                          getTaskInfo = {this.getTaskInfo.bind(this)}/>
                <button onClick = {this.handleAddTask.bind(this)}> + add card</button>
                <button onClick = {this.props.handleSaveTask} type="submit">save card</button>
            </form>
        )
    }
}

export default AddCardBoard;