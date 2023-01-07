import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" style={{ color: "white" }}>MultiTool</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link" to="Calculator" style={{ color: "white" }}>Calculator</Link>
                                <Link className="nav-link" to="List" style={{ color: "white" }}>To-Do List</Link>
                                <Link className="nav-link" to="API" style={{ color: "white" }}>API</Link>                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar

