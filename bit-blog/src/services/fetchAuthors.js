// import { UserClass } from "../entities/usersClass";

const fetchAuthors = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json()
        })
}
export {
    fetchAuthors
}