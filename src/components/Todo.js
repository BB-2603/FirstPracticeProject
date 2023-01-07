import React, { Component } from 'react'
import TodoListBox from './TodoListBox';

export class Todo extends Component {
    constructor() {
        super();
        if (!localStorage.getItem("tasklist")) {
            localStorage.setItem("tasklist", "[]")
        }
        this.state = {
            addvalue: "",
            todolist: JSON.parse(localStorage.getItem("tasklist")),
            counter: -1,
        }
    }

    handleChange = () => {
        let listtask = document.getElementById('task');
        this.setState({ addvalue: listtask.value });
    }

    addtask = () => {
        let listtask = document.getElementById('task');
        let templist = this.state.todolist;
        templist.push(listtask.value);
        this.setState({ todolist: templist });
        this.setState({ addvalue: "" });
        localStorage.setItem("tasklist", JSON.stringify(this.state.todolist))

    }
    render() {
        let alter = "rgb(132, 112, 83)"
        let bgclr = "antiquewhite"

        let txtclr = "white"
        let altclr = "rgb(90, 59, 18)"
        return (
            <>
                <div className='main'>
                    <div className="contain">
                        <div className="head">
                            <input type="text" id="task" onChange={() => this.handleChange()} value={this.state.addvalue} placeholder="Add Your Task" />
                            <button onClick={() => this.addtask()} className="addBtn">Add Task</button>
                            <div className="listItems">
                                {
                                    this.state.todolist.map((element) => {

                                        return (
                                            <TodoListBox task={element} id={this.state.todolist.indexOf(element)} bgcolor={this.state.todolist.indexOf(element) % 2 == 1 ? alter : bgclr} fntclr={this.state.todolist.indexOf(element) % 2 == 1 ? txtclr : altclr} />
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Todo