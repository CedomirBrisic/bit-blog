import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-primary sticky-top row">
            <h2 className="navbar-brand col-3 offset-1" >BIT Blog</h2>
            <div className="navbar-nav col-3 offset-4">
                <div className="row">
                    <Link className="col-3 offset-1" to="./">
                        <p className="nav-item nav-link" >Home</p>
                    </Link>
                    <Link className="col-3 offset-1" to="./AuthorsPage">
                        <p className="nav-item nav-link" >Authors</p>
                    </Link>
                    <Link className="col-3 offset-1" to="./AboutPage">
                        <p className="nav-item nav-link" >About</p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export { Header }