import React from 'react'
import { connect } from 'react-redux';

// This component show all the props from redux state. 
 function DisplayStore(props) {
    return (
        <div>
            <h1>Count: {props.count}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Name: {props.name}</h1>
        </div>
    )
}

// all we needed to connect was state. Dispatch is still available but not used. 
export default connect(state => state)(DisplayStore)
