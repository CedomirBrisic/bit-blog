const fetchSingleAuthorPosts = (inputData) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${inputData}`)
        .then((response) => {
            return response.json()
        })
}

export {
    fetchSingleAuthorPosts
}