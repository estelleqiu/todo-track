import React, {Component} from 'react';

class CardList extends Component{
    constructor(){
        super(...arguments);
        this.state = {tasks: this.props.tasks};
    };

    handleRemove(item){
        var items = this.state.tasks.filter((itm)=> {return item.id !== itm.id;})
        this.setState({tasks: items});
    };

    handleInputChange(event,task){
        const target = event.target;
        const value = target.checked;
        this.setState({
            checkbox: true
            
        })
        this.handleRemove(task)
    }
    render(){
        let task  = (
            this.state.tasks.map((task) => {
                return (
                    <li key= {task.id} id = {task.id}>
                        <input type="checkbox" onChange={this.handleInputChange.bind(this,task)} />
                        {task.name}
                        <a href="#" className="checklist__task--remove" onClick={
                            this.handleRemove.bind(this, task)}/>
                    </li>
                )}
            )
        );
        return (
            <ul className = "checklist__task">
                {task}
            </ul>
        )
    }
}

export default CardList;