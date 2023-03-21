import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="/img/logo.png" alt="logo" style={{width:"53px"}} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Contact</a>
                        </li>


                    </ul>
                    <div className="flex">
                       <Link to="/register"> <button className="btn btn-success mx-2">Signup</button></Link>
                       <Link to="/login"><button className="btn btn-success mx-2">Login</button></Link>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar