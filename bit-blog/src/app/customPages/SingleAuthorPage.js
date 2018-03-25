import React from 'react';
import { UserClass } from "../../entities/usersClass";
import { fetchAuthors } from "../../services/fetchAuthors";

// import {ListItemForAuthors} from "./support/ListItemForAuthors"

class SingleAuthorPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: []
        }
    }

    getAuthors(inputId) {
        fetchAuthors()
            .then((response) => {
                return response.map((element) => {
                    return new UserClass(element.id, element.name, element.username, element.email,
                        element.phone, element.address.street, element.address.city, element.address.zipcode,
                        element.address.geo.lat, element.address.geo.lng, element.company.name,
                        element.company.catchPhrase);
                })
            })
            .then((response) => {
                this.setState({
                    userData: response[inputId],
                })
            })

    }

    componentDidMount() {
        this.getAuthors(this.props.match.params.userId)
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5 mb-5">
                    <img src="https://stmaryshospitalumuowa.com/images/contact_png.PNG" alt="contact" className=" col- 4" />
                    <ul className="list-group col-6 offset-1 mt-5">
                        <li className="list-group-item active"><b>{this.state.userData.name}</b></li>
                        <li className="list-group-item">Username: <b>{this.state.userData.username}</b></li>
                        <li className="list-group-item">Email: <b>{this.state.userData.email}</b></li>
                        <li className="list-group-item">Phone: <b>{this.state.userData.phone}</b></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-4 offset-1">

                        <div className="col mt-5 mb-5">
                            <ul className="list-group">
                                <li className="list-group-item active">Address</li>
                                <li className="list-group-item">Street: <b>{this.state.userData.street}</b></li>
                                <li className="list-group-item">City: <b>{this.state.userData.city}</b></li>
                                <li className="list-group-item">Zipcode: <b>{this.state.userData.zipcode}</b></li>
                            </ul>
                        </div>
                        <div className="col mt-5 mb-5">
                            <ul className="list-group">
                                <li className="list-group-item active">Company</li>
                                <li className="list-group-item">Name: <b>{this.state.userData.company}</b></li>
                                <li className="list-group-item">Slogan: <b>{this.state.userData.slogan}</b></li>
                            </ul>
                        </div>
                    </div>
                    <iframe className=" mb-5 p-2 col-6 offset-1" src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2830.8684639325147!2d${this.state.userData.geoLng}!3d${this.state.userData.geoLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1521911596367`} ></iframe>
                </div>
            </div>
        )
    }
}


export default SingleAuthorPage