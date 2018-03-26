const fetchSinglePost = (inputData) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${inputData}`)
        .then((response) => {
            return response.json()
        })
}

export {
    fetchSinglePost
}