import React from 'react'
import {Link} from "react-router-dom"

const ListItemForAuthors = (props) => {
    return (
        // <div className="col-12 mt-5 mb-5">
        <Link to={`./SingleAuthorPage/${props.data.userId-1}`}>
        <li className="list-group-item shadow col-12 mt-1 mb-1">{props.data.name}</li>
        </Link>
        // </div>
    )
}

export { ListItemForAuthors };