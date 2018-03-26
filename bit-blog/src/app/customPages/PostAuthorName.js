import React from 'react'
import { Link } from 'react-router-dom';
import { fetchSingleAuthor } from "../../services/fetchSingleAuthor";
import { UserClass } from "../../entities/usersClass"


class PostAuthorName extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            author: null
        }

    }

    componentDidMount() {
        fetchSingleAuthor(this.props.authorId)
            .then((response) => {
                const author = new UserClass(response.id, response.name, response.username, response.email,
                    response.phone, response.address.street, response.address.city, response.address.zipcode,
                    response.address.geo.lat, response.address.geo.lng, response.company.name,
                    response.company.catchPhrase
                );
                this.setState({
                    author: author
                })
            })
    }

    render() {

        if (!this.state.author) {
            return <p>...</p>
        }

        return (
            <Link to={`/SingleAuthorPage/${this.props.authorId}`}>
                <h6 className="card-subtitle mb-2 text-muted">{this.state.author.name}</h6>
            </Link>
        )
    }
}

export default PostAuthorName