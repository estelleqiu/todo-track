import React, { Component }from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import AddCardBoard from './AddCardBoard'
import Card from './Card';

class List extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            AddItemIsDisplay: false,
            Cards: this.props.cards}
    }

    addItemBoradDisplay(){
        this.setState({AddItemIsDisplay: true})
    };

    handleAddEvent(value){
        const id = (this.state.Cards.length);
        const card = {
            id: id,
            title: value,
            description: "",
            tasks: []
        }
        this.state.Cards.push(card);
        this.setState({Cards: this.state.Cards})
    };

    render(){
        var cards = this.state.Cards.map((card)=>{
            return <Card key = {card.id}
                         cardId = {card.id}
                         title = {card.title}
                         description = {card.description}
                         tasks = {card.tasks}/>
        });

        let addCardItem;
        if (this.state.AddItemIsDisplay) {
            addCardItem =  (<AddCardBoard listStatus = {this.props.title} 
                                          cards = {this.state.Cards} 
                                          callBackfunc = {this.props.callBackfunc}/>)
        };

        return(
            <div className = "list">
                <h1>{this.props.title}</h1>
                {cards}
                <CSSTransitionGroup 
                    transitionName ="toggle" 
                    transitionEnterTimeout={250}
                    transitionLeaveTimeout={250}>
                    {addCardItem}
                </CSSTransitionGroup>
                <button onClick= {this.addItemBoradDisplay.bind(this)}> + note</button>
            </div>
        )
    }
}

export default List;