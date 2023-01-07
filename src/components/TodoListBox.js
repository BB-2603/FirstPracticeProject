import React, { Component } from 'react'
import './todo.css'

export class TodoListBox extends Component {

    constructor() {
        super();

    }

    deleteItem = (element) => {
        console.log(element);
        let temp = JSON.parse(localStorage.getItem("tasklist"));
        temp.splice(element.props.id, 1);
        localStorage.setItem("tasklist", JSON.stringify(temp));
        window.location.reload()

    }

    done = (element) => {

        if (element.checked) {
            element.parentNode.style.textDecoration = "line-through"
        } else {
            element.parentNode.style.textDecoration = "none"
        }
    }
    render() {
        let { task, id, bgcolor, fntclr } = this.props;

        return (
            <>
                <div className="listBox" id={id}>
                    <div className='task' id="todo" style={{ backgroundColor: bgcolor, color: fntclr }}>
                        <input type="checkbox" className="done" onClick={e => this.done(e.target)} />
                        {task}
                    </div>
                    <div className="deleteIcon" style={{ backgroundColor: bgcolor, color: fntclr }}>

                        <a onClick={() => this.deleteItem(this)}><i class="fa-solid fa-trash"></i></a></div>
                </div>

            </>
        )
    }
}

export default TodoListBox
