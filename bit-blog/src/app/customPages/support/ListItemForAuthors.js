import React from 'react'
import { Link } from "react-router-dom"

const ListItemForAuthors = (props) => {
    return (
        <Link to={`./SingleAuthorPage/${props.data.userId}`}>
            <li className="list-group-item shadow col-12 mt-1 mb-1">{props.data.name}</li>
        </Link>
    )
}

export { ListItemForAuthors };