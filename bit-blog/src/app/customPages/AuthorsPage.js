import React from 'react'

import { UserClass } from "../../entities/usersClass"
import { fetchAuthors } from "../../services/fetchAuthors"
import { ListItemForAuthors } from "./support/ListItemForAuthors"


class AuthorsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authorsData: []
        }
    }

    componentDidMount() {
        fetchAuthors()
            .then((response) => {
                return response.map((element) => {
                    return new UserClass(element.id, element.name, element.username, element.email,
                        element.phone, element.address.street, element.address.city, element.address.zipcode,
                        element.address.geo.lat, element.address.geo.lng, element.company.name,
                        element.company.bs);
                })
            })
            .then((response) => {
                this.setState({
                    authorsData: response
                })
            })
    }

    render() {
        return (
            <div className="container Site-content">
                <h1 className='text-center mt-4'>Welcome to Authors Page</h1>
                <div className="row">
                    <ul className="list-group col-8 offset-2 mt-5">
                        {this.state.authorsData.map((user, index) => {
                            return <ListItemForAuthors data={user} key={index} />
                        })}
                    </ul>
                </div>

            </div>
        )
    }
}

export default AuthorsPage