import React, { Component }from 'react';
import Card from './Card';
import AddItem from './AddItem'

class List extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            AddItemInput: false,
            Cards: this.props.cards}
    }

    addItem(){
        this.setState({AddItemInput: true})
    };

    _handleKeyPress(e){
        this.handleAddEvent(e.target.value)
        this.setState({AddItemInput: false})
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
            return <Card key={card.id}
                         title = {card.title}
                         description={card.description}
                         tasks={card.tasks}/>
        });

        let itemInput;
        if (this.state.AddItemInput) {
            itemInput =  (<AddItem _handleKeyPress = {this._handleKeyPress.bind(this)}/>)
        };

        return(
            <div className = "list">
                <h1>{this.props.title}</h1>
                {cards}
                {itemInput}
                <button onClick= {this.addItem.bind(this)}> + note</button>
            </div>
        )
    }
}

export default List;