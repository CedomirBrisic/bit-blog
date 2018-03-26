import React from 'react';
import { postClass } from "../../entities/userPostClass";
import { fetchSinglePost } from "../../services/fetchSinglePost";
import { SinglePostPageListItem } from "./support/SinglePostPageListItem";
import PostAuthorName from './PostAuthorName';

class SinglePostPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            singlePostData: null
        }
    }

    getPostData(inputData) {
        fetchSinglePost(inputData)
            .then((response) => {
                return new postClass(response.userId, response.id, response.title, response.body)
            })
            .then((post) => {
                this.setState({
                    singlePostData: post
                })
            })

    }

    componentDidMount() {
        this.getPostData(this.props.match.params.postId)
    }

    componentWillReceiveProps(nextProps) {
        this.getPostData(nextProps.match.params.postId)
    }

    render() {
        if (!this.state.singlePostData) {
            return <h3>Loading...</h3>;
        }

        return (
            <div className="container" >
                <div className="card col-8 offset-2 mt-4 mb-3">
                    <div className="row">
                        <div className="card-body offset-2">
                            <h1 className="card-title">{this.state.singlePostData.title}</h1>
                            <PostAuthorName authorId={this.state.singlePostData.userId} />
                            <p className="card-text">{this.state.singlePostData.body}</p>
                        </div>
                    </div>
                    <ul className="list-group mt-5 p-3 ">
                        <li className="list-group-item active" > More posts from Author: </li>
                        <SinglePostPageListItem data={this.state.singlePostData.userId} />
                    </ul>

                </div>
            </div >

        )
    }
}

export default SinglePostPage