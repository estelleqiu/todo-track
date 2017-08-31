import React, {Component} from 'react';
import update from 'immutability-helper';
import TaskList from './AddTask';

class AddCardBoard extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            id: null,
            name: '',
            description: '',
            tasks: [{
                id: 1,
                name: "",
                done: false
            }]
        }
    };

    _onChange(e) {
        var state = {};
        if(e.target.name == 'tasks'){
            let nextState = update(this.state.tasks, {
                name: {
                    $set: e.target.value
                }
            })
        }else {
            state[e.target.name] =  (e.target.value).trim();
        }
        this.setState(state);
        console.log(this.state)
    };

    render(){
        return (
           <form className = "addItem">
                <label>title</label><input name="name" onChange={this._onChange.bind(this)} />
                <label>description</label><input name="description" onChange={this._onChange.bind(this)}/>
                <TaskList taskList = {this.state.tasks} 
                          cardId = {5}
                          callBackfunc = {this.props.callBackfunc}
                          onChange = {this._onChange.bind(this)}/>
                <a onClick = {this.props.callBackfunc.addCardAndTask.bind(this)}> + add card</a>
                <a type="submit">save card</a>
            </form>
        )
    }
}

export default AddCardBoard;