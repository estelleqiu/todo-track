import React, { Component } from 'react';
import List from './List'

class KanbanBoard extends Component{
    constructor(){
        super(...arguments);
    }

    handleSaveTask(cardId, taskId, taskName){
        console.log(cardId + ' ' + taskId + ' ' + taskName)
    }

    addCardAndTask(){
        const taskId = this.state.tasks.length + 1;

        const taskItem = {
            id: taskId ,
            name: '',
            done: false
        }

        let nextState = update(this.state.tasks, {
            $push: [taskItem]
        })

        this.setState({tasks: nextState})
    }

    toggleCardAndTask(cardId, taskId, taskIndex){
        let cardIndex = this.props.cardList.findIndex((card) => card.id == cardId );
        let prevState = this.state;

        let newDoneValue;
        let nextState = update(this.state.cards, {
            [cardIndex]: {
               tasks: {
                   [taskIndex]:{
                       done: { $apply: (done) => {
                           newDoneValue = !done
                           return newDoneValue
                       }}
                   }
               } 
            }
        })

        this.setState({cards: nextState});    
    }

    deleteCardAndTask(){

    }

    render(){
        return (
            <div className="app">
                <List id="todo"
                      title = "TO DO"
                      cards = {this.props.cardList.filter( (item) => item.status == 'todo')}
                      handleSaveTask= {this.handleSaveTask.bind(this)}
                      callBackfunc = {{addCardAndTask: this.addCardAndTask.bind(this),
                                       toggleCardAndTask: this.toggleCardAndTask.bind(this),
                                       deleteCardAndTask: this.deleteCardAndTask.bind(this),}}/>
                <List id="in-progress"
                      title = "In Progress"
                      cards = {this.props.cardList.filter( (item) => item.status == 'in-progress')}
                      handleSaveTask= {this.handleSaveTask.bind(this)}
                      callBackfunc = {{addCardAndTask: this.addCardAndTask.bind(this),
                                       toggleCardAndTask: this.toggleCardAndTask.bind(this),
                                       deleteCardAndTask: this.deleteCardAndTask.bind(this),}}/>
                <List id="done"
                      title = "Done"
                      cards = {this.props.cardList.filter( (item) => item.status == 'done')}
                      handleSaveTask= {this.handleSaveTask.bind(this)}
                      callBackfunc = {{addCardAndTask: this.addCardAndTask.bind(this),
                                       toggleCardAndTask: this.toggleCardAndTask.bind(this),
                                       deleteCardAndTask: this.deleteCardAndTask.bind(this),}}/>
            </div>  
        )
    }
};

export default KanbanBoard