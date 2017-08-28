import React, { Component } from 'react';
import List from './List'

class KanbanBoard extends Component{
    handleSaveTask(cardId, taskId, taskName){
        console.log(cardId + ' ' + taskId + ' ' + taskName)
    }
    render(){
        return (
            <div className="app">
                <List id="todo"
                      title = "TO DO"
                      cards = {this.props.cardList.filter( (item) => item.status == 'todo')}
                      handleSaveTask= {this.handleSaveTask.bind(this)}/>
                <List id="in-progress"
                      title = "In Progress"
                      cards = {this.props.cardList.filter( (item) => item.status == 'in-progress')}
                      handleSaveTask= {this.handleSaveTask.bind(this)}/>
                <List id="done"
                      title = "Done"
                      cards = {this.props.cardList.filter( (item) => item.status == 'done')}
                      handleSaveTask= {this.handleSaveTask.bind(this)}/>
            </div>  
        )
    }
};

export default KanbanBoard