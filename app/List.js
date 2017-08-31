import React, { Component }from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import AddCardBoard from './AddCardBoard'
import Card from './Card';

class List extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            AddItemIsDisplay: false
        }
    }

    addCardBoradDisplay(){
        this.setState({AddItemIsDisplay: !this.state.AddItemIsDisplay})
    };

    render(){
        var cards = this.props.cards.map((card)=>{
            return <Card key = {card.id}
                         cardId = {card.id}
                         title = {card.title}
                         description = {card.description}
                         tasks = {card.tasks}
                         callBackfunc = {this.props.callBackfunc}/>
        });

        let addCardItem;
        if (this.state.AddItemIsDisplay) {
            addCardItem =  (<AddCardBoard listStatus = {this.props.id} 
                                          cards = {this.state.Cards} 
                                          callBackfunc = {this.props.callBackfunc}
                                          addCardBoradDisplay = {this.addCardBoradDisplay.bind(this)}/>)
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
                <button onClick= {this.addCardBoradDisplay.bind(this)}> + note</button>
            </div>
        )
    }
}

export default List;