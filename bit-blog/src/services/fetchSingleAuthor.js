const fetchSingleAuthor = (inputData) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${inputData}`)
        .then((response) => {
            return response.json()
        })
}

export {
    fetchSingleAuthor
}