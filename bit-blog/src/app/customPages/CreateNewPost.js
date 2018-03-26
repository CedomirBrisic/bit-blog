import React from "react"
import { Link } from "react-router-dom"
const CreateNewPost = () => {

    return (
        <div className="container shadow mt-5">
            <form>

                <div className="form-group p-3">
                    <input type="text" className="form-control p-3" id="exampleFormControlInput1" placeholder="Title" />
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    <Link to="/">  <button type="button" className="btn btn-primary mt-5 btn-lg btn-block mb-4">Create New Post</button> </Link>
                </div>

            </form>
        </div>
    )
}

export { CreateNewPost }