import React, { Component } from 'react';
import List from './List'
class KanbanBoard extends Component{
    render(){
        return (
            <div className="app">
                <List id="todo"
                      title = "TO DO"
                      cards = {this.props.cardList.filter( (item) => item.status == 'todo')}/>
                <List id="in-progress"
                      title = "In Progress"
                      cards = {this.props.cardList.filter( (item) => item.status == 'in-progress')}/>
                <List id="done"
                      title = "Done"
                      cards = {this.props.cardList.filter( (item) => item.status == 'done')}/>
            </div>  
        )
    }
};

export default KanbanBoard