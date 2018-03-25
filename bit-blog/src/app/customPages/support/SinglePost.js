import React from 'react'
import { Link } from "react-router-dom"

import {UserClass} from "../../../entities/usersClass"

const shortBody = (inputData) => {
    return inputData.slice(0, 50) + "..."
}

class SinglePost extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            authorsData: []
        }
    }

    render() {

        return (
            <div className="card col-8 offset-2 mt-4 mb-3">
                <div className="card-body">
                    <Link to={`./SinglePostPage/${this.props.postData.userId}`}>
                        <h5 className="card-title text-primary">{this.props.postData.title}</h5>
                    </Link>
                    <p className="card-text">{shortBody(this.props.postData.body)}</p>

                </div>
            </div>
        )

    }

}
export { SinglePost };