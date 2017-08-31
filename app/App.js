import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        status: "in-progress",
        tasks: []       
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: false
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]       
    }
]

var cardListStore = JSON.parse(localStorage.getItem("todo-things"));
if (!cardListStore){
    localStorage.setItem("todo-things", JSON.stringify(cardList));
    var cardListStore = JSON.parse(localStorage.getItem("todo-things"));
}

render(
    <KanbanBoard cardList = {cardListStore}/>,
    document.getElementById('root')
)