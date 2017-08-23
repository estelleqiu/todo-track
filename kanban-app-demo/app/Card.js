import React, {Component} from 'react';
import CardList from './CardList'

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
             tasks = (<CardList tasks = {this.props.tasks}/>)
        };
        return(
            <div className = "card">
                <div className = "card-list">
                    <div className = {this.state.cardShow ? 'card__title--is-open card__title' : 'card__title'} onClick={this.handleCardDisplay.bind(this)} >
                        {this.props.title}               
                    </div>
                    {this.props.description}
                </div>
                {tasks}
            </div>
        )
    }
}

export default Card;