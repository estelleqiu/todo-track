import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import Task from './Task'

class Card extends Component {
    constructor(){
        super(...arguments);
        this.state = {cardShow: false}
    }
    handleCardDisplay(){
        this.setState({cardShow: !this.state.cardShow})
    }
    render(){
        let tasks;
        if (this.state.cardShow){
             tasks = (<Task tasks = {this.props.tasks}/>)
        };
        return(
            <div className = "card">
                <div className = "card-list">
                    <div className = {this.state.cardShow ? 'card__title--is-open card__title' : 'card__title'} onClick={this.handleCardDisplay.bind(this)} >
                        {this.props.title}               
                    </div>
                    {this.props.description}
                </div>
                <CSSTransitionGroup 
                    transitionName ="toggle" 
                    transitionEnterTimeout={250}
                    transitionLeaveTimeout={250}>
                    {tasks}
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default Card;