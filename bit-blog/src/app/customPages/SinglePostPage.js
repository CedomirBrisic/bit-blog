import React from 'react';

import { postClass } from "../../entities/userPostClass";

import { fetchSingleAuthor } from "../../services/fetchSingleAuthor";
import {SinglePostPageListItem} from "./support/SinglePostPageListItem";

class SinglePostPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            singlePostData: [],
            singleAuthorData: []
        }
    }

    getAuthorData(inputData) {
        fetchSingleAuthor(inputData)
            .then((response) => {
                return response.map((element) => {
                    return new postClass(element.userId, element.id, element.title, element.body)
                })
            })
            .then ((response) => {
                this.setState ({
                    singleAuthorData: response
                })
            })
    }
    componentDidMount(){
        this.getAuthorData(this.props.match.params.userId)
    }

    render() {
        // console.log(this.state.singleAuthorData)
        return (
            <div className="container">
                <div className="card col-8 offset-2 mt-4 mb-3">
                    <div className="row">
                        <div className="card-body offset-2">
                            <h1 className="card-title">!!! TITLE FROM DATA !!!</h1>
                            <h6 className="card-subtitle mb-2 text-muted">!!! link to single author page - Authors Name!!!</h6>
                            <p className="card-text">!!! some text from data !!!</p>
                        </div>
                    </div>
                    <ul className="list-group mt-5">
                        <li className="list-group-item active">3 More posts from same author:</li>
                        {/* <li className="list-group-item">{this.state.singleAuthorData[2]}</li> */}
                       <SinglePostPageListItem data={this.state.singleAuthorData}/>
                    </ul>

                </div>
            </div>

        )
    }
}

export default SinglePostPage