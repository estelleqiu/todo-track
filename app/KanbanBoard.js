import React, { Component } from 'react';
import List from './List'
import update from 'immutability-helper';

class KanbanBoard extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            cardList: this.props.cardList
        }
    }

    addCardAndTask(cardItem){
        cardItem.id = this.state.cardList.length + 1  
        const prevState = this.state.cardList
        let nextState = update(this.state.cardList, {
            $push: [cardItem]
        })
        this.setState({cardList: nextState})

        localStorage.setItem("todo-things", JSON.stringify(this.state.cardList))
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

        this.setState({cardList: nextState});    
    }

    deleteCardAndTask(){

    }

    render(){
        return (
            <div className="app">
                <List id="todo"
                      title = "TO DO"
                      cards = {this.state.cardList.filter( (item) => item.status == 'todo')}
                      callBackfunc = {{addCardAndTask: this.addCardAndTask.bind(this),
                                       toggleCardAndTask: this.toggleCardAndTask.bind(this),
                                       deleteCardAndTask: this.deleteCardAndTask.bind(this),}}/>
                <List id="in-progress"
                      title = "In Progress"
                      cards = {this.state.cardList.filter( (item) => item.status == 'in-progress')}
                      callBackfunc = {{addCardAndTask: this.addCardAndTask.bind(this),
                                       toggleCardAndTask: this.toggleCardAndTask.bind(this),
                                       deleteCardAndTask: this.deleteCardAndTask.bind(this),}}/>
                <List id="done"
                      title = "Done"
                      cards = {this.state.cardList.filter( (item) => item.status == 'done')}
                      callBackfunc = {{addCardAndTask: this.addCardAndTask.bind(this),
                                       toggleCardAndTask: this.toggleCardAndTask.bind(this),
                                       deleteCardAndTask: this.deleteCardAndTask.bind(this),}}/>
            </div>  
        )
    }
};

export default KanbanBoard