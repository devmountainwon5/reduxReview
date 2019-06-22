import React, { Component } from 'react';
import { connect } from 'react-redux';

//Basic setup using dispatch we do not use action_creators in this example.
class AgeChange extends Component {
    updateAge = (event) => {
        // dispatch is available on props through the connect statment below
        // it is only availble if you DO NOT use action_creators in the connect
        // see  counter.js or name_change.js for the difference.
        
        // dispatch sends the action object to the reducer.
        //EX: {type="Type", payload(optional)="whatever you want it to"}
        this.props.dispatch({
            type:"age",
            payload: event.target.value,
        })
    }
	render() {
		return (
			<div>
				{/* age comes from the property in the redux store. 
            That is made availiable in props by the connect statment below */}
				{this.props.age}
                {/* Setting the value of an input to a redux 
                property is a thing that you can do */}
				<input type="number" value={this.props.age} onChange={this.updateAge} />
			</div>
		);
	}
}

// The state parameter is the store of redux that we passed in
// as a prop in the index.js file on the root of the react application.
export default connect(state => {
	return state;
})(AgeChange);
