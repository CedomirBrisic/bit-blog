import React from 'react'

import { postClass } from "../../entities/userPostClass"
import { SinglePost } from "./support/SinglePost"
import { fetchPosts } from "../../services/fetchPosts"
import { Link } from "react-router-dom"

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            postsData: [],
            authorsData: [],
            randomNum: 0,
            randomPosts: []
        }
    }

    getPosts() {
        fetchPosts()
            .then((response) => {
                return response.map((element) => {
                    return new postClass(element.userId, element.id, element.title, element.body)
                })
            })
            // .then((response) => {
            //     console.log("result:" + this.result)
            //     let result = [];
            //     for (let i = 0; i < 6; i++) {
            //         result.push(response[Math.ceil(Math.random() * 100)])
            //         // return result;
            //     }
            //     this.setState({
            //         randomPosts: this.result
            //     })
            // })
            .then((posts) => {
                let result = [];
                for (let i = 0; i < 6; i++) {
                    const randomIndex = Math.ceil(Math.random() * 99);
                    result.push(posts[randomIndex])
                }


                this.setState({
                    randomPosts: result
                })
            })
    }
    // randomNum() {

    //     const randomNum = () => {
    //         const rnd = Math.ceil(Math.random() * 100)
    //         return rnd

    //     }
    //     this.setState({
    //         randomNum: randomNum()
    //     })
    // }

    // setRandomPosts() {
    //     let result = [];
    //     for (let i = 0; i < 6; i++) {
    //         result.push(this.state.ran[Math.ceil(Math.random() * 100)])
    //         return result;
    //     }
    //     console.log("result")
    //     this.setState({
    //         randomPosts: this.result
    //     })
    // }

    componentDidMount() {
        this.getPosts()
        // this.setRandomPosts()
        // this.randomNum()
    }


    render() {
        // console.log(this.state.postsData[this.state.randomNum])
        // console.log(this.state.postsData)
        return (
            <div className="container p-5">
                <h1 className='text-center mt-4'>POSTS</h1>
                <div className="row">
                    {this.state.randomPosts.map((post, index) => {
                        return <SinglePost postData={post} key={index} />

                    })}
                </div>
                <Link to="/CreateNewPost">  <button type="button" className="btn btn-primary btn-lg btn-block mb-4">Create New Post</button> </Link>

            </div>
        )
    }
}
export default HomePage 