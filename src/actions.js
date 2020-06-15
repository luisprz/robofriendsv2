import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants.js'

export const setSearchField = (text) => ({
        type: CHANGE_SEARCH_FIELD, //constant goes in mayuscula. thats the object type and the payload is what it receives
        payload: text
    }
)
export const requestRobots = () => (dispatch) => { //high order function now to use or provide the dispatch function to use in everything //we calll request robots action
    dispatch({ type: REQUEST_ROBOTS_PENDING}); //no payload
    fetch('https://jsonplaceholder.typicode.com/users') //then we fetch or receive the users
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })) //we have success with paload of users
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })) // or a failed with the payload of the error
}