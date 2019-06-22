import React, { Component } from 'react';
import { connect } from 'react-redux';

//Best way to import action creator. Import everything from action_creators.js
// and give it an allias of actions.
import * as Actions from '../../redux/action_creators/action_creators';

//Example using quick setup for state and action_creators (Josh prefers this method)
class NameChange extends Component {
	handleNameChange = event => {
        // this will run the changeName action creator which is available on 
        // props from the connect statment below. 
		this.props.changeName(event.target.value);
	};
	render() {
		return (
			<div>
				{this.props.name}
				<input type="text" placeholder="name" value={this.props.name} onChange={this.handleNameChange} />
			</div>
		);
	}
}
//This will be a simplified version of counter.js
// simply add you state cb function and the Actions object.
export default connect(state => state, Actions)(NameChange);
