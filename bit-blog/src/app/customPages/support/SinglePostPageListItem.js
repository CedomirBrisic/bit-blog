import React from 'react';
import { postClass } from "../../../entities/userPostClass"
import { fetchSingleAuthorPosts } from "../../../services/fetchSingleAuthorPosts"
import { Link } from "react-router-dom";


class SinglePostPageListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            posts: null
        })
    }

    getData() {
        console.log(this.props.data);
        fetchSingleAuthorPosts(this.props.data)
            .then((response) => {
                return response.map((element) => {
                    return new postClass(element.userId, element.id, element.title, element.body)
                })
            })
            .then((result) => {

                this.setState({
                    posts: result
                })
            })

    }

    componentDidMount() {
        this.getData()
    }

    render() {
        if (!this.state.posts) {
            return <h3>Loading...</h3>;
        }
        return (
            // console.log(this.props.data)
            // console.log(this.state.posts)
            // return (
            this.state.posts.slice(0, 3).map((element, index) => {
                return <Link to={`/SinglePostPage/${element.postId}`} key={index}> <li className="list-group-item" > {element.title}</li>
                </Link>
            })

            // )
        )
    }
}

export {
    SinglePostPageListItem
}

