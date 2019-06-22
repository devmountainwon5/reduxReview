// use this method to build redux state 
import {combineReducers} from 'redux'

// This is a reducer it is a function that takes in two parameters
// state which will be set by default EX:state=0 and action which is 
// javascript object with two properties type and payload.
const count = (state = 0, action) => {
    switch(action.type){
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        default:
            return state
    }
    
}

//same as above see line 4
const name = (state = '', action) => {
    switch(action.type){
        case "name" :
            return action.payload;
       default:
            return state
    }
}

//same as above see line 4
const age = (state = 0, action) => {
    switch(action.type){
        case "age" :
            return action.payload;
       default:
            return state
    }
    
}

// Combines function into an object. The key/property name will be equal to
// name of the function and the value will be what is returned from it's
// corresponding function.
export default combineReducers({count, name, age})