const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json()
    })
}

export {
    fetchPosts
}