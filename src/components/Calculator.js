import React, { Component } from 'react'
import './calculator.css'

export class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: "",
            counter: 0,
        }
    }


    clean = () => {
        this.setState({ inputValue: "" });
    }

    submit = () => {
        let send = this.state.inputValue;
        this.clean();
        try {

            this.setState({ inputValue: eval(send) });
        } catch (error) {
            this.setState({ inputValue: "Invalid Input!!" })
        }
        this.setState({ counter: 1 });
    }

    input = (element) => {
        if (this.state.counter == 1) {
            this.clean();
            this.setState({ counter: 0 });
        }
        this.setState({ inputValue: this.state.inputValue + element.innerHTML });

    }
    render() {
        return (
            <>
                <div className="container">

                    <div className="calculator">
                        <input type="text" value={this.state.inputValue} name="screen" id="screen" autoComplete='off' readOnly />
                        <table>
                            <tr>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>(</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>)</button></td>
                                <td><button className="clear" onClick={() => { this.clean() }}>C</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>%</button></td>
                            </tr>
                            <tr>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>7</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>8</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>9</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>*</button></td>
                            </tr>
                            <tr>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>4</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>5</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>6</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>-</button></td>
                            </tr>
                            <tr>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>1</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>2</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>3</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>+</button></td>
                            </tr>
                            <tr>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>0</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>.</button></td>
                                <td><button className="input" onClick={e => { this.input(e.target) }}>/</button></td>
                                <td><button className="enter" onClick={() => { this.submit() }}>=</button></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </>
        )
    }
}

export default Calculator
