import { object } from "prop-types";
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'


const initialStateSearch = {
    searchField: '' //initial state or object
}

export const searchRobots = (state=initialStateSearch, action = {}) => {//default parameters using ES6 to make sure if state or action empty we not get an error
    //console.log(action.type);
    switch (action.type) {
        case CHANGE_SEARCH_FIELD: //if we receive this action then return the new state with action.payload that will be the text wrote in the search field!
            return Object.assign({}, state, { searchField: action.payload });
        //return {...state, searchField: action.payload }
        default:
            return state;
    }
}

const initialStateRobots = {
    robots: [],
    isPending: true
/*     isPending: false,
    error: '' */
}


export const requestRobots = (state=initialStateRobots, action = {}) => { //another reducer
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state

    }
}