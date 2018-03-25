import React from 'react'

import { postClass } from "../../entities/userPostClass"
import { SinglePost } from "./support/SinglePost"
import { UserClass } from "../../entities/usersClass"
import { fetchPosts } from "../../services/fetchPosts"


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
            //     let result = [];
            //     for (let i = 0; i < 6; i++) {
            //         result.push(response[Math.ceil(Math.random() * 100)])
            //         // return result;
            //         console.log("result:"+this.result)
            //     }
            //     this.setState({
            //         randomPosts: this.result
            //     })
            // })
            .then((response) => {
                this.setState({
                    postsData: response
                })
            })
    }
    randomNum() {

        const randomNum = () => {
            const rnd = Math.ceil(Math.random() * 100)
            return rnd

        }
        this.setState({
            randomNum: randomNum()
        })
    }

    setRandomPosts() {
        let result = [];
        for (let i = 0; i < 6; i++) {
            result.push(this.state.postsData[Math.ceil(Math.random() * 100)])
            // return result;
        }
        console.log("result")
        this.setState({
            randomPosts: this.result
        })
    }

    componentDidMount() {
        this.getPosts()
        // this.setRandomPosts()
        // this.randomNum()
    }


    render() {
        // console.log(this.state.postsData[this.state.randomNum])
        console.log(this.state.randomPosts)
        return (
            <div className="container">
                <h1 className='text-center mt-4'>POSTS</h1>
                <div className="row">
                    {this.state.postsData.map((post) => {
                        return <SinglePost postData={post} />

                    })}
                </div>

            </div>
        )
    }
}
export default HomePage 