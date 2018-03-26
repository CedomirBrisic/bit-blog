const fetchSingleAuthor = (inputData) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${inputData}`)
        .then((response) => {
            return response.json()
        })
}

export {
    fetchSingleAuthor
}