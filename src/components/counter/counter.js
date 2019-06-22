import React, { Component } from 'react'
import {connect} from 'react-redux';

//This is need to add action_creators to props. 
import {bindActionCreators} from 'redux';

//Action_Creator imported from it's relative path.
import {addSubtract} from '../../redux/action_creators/action_creators';

// Action_creator setup using mapStateToProps and MapDispatchToProps
 class Counter extends Component {
     handleClick = (command) => {
         // this method runs our action creator
         this.props.addSubtract(command)
     }
    render() {
        return (
            <div>
                <button onClick={()=> {this.handleClick("subtract")}}>-</button>
                {this.props.count}
                <button onClick={()=> {this.handleClick("add")}}>+</button>
            </div>
        )
    }
}

//This is just a function that returns an object. 
//The state parameter is the redux state object. 
const mapStateToProps = (state) =>{
// You can return state if you want everything.
 return {count: state.count}
}

// This is a function that takes in the dispatch from props.
// and replaces it with you action creators.
const mapDispatchToProps = (dispatch) => {

    // this function returns the invocation of bindActionCreators
    // bindActionCreators take in an object and dispatch. 
    // the object takes in your imported action creators.
    return bindActionCreators({addSubtract}, dispatch)
}

// connect takes in two callback function and runs both of them. 
export default connect(mapStateToProps, mapDispatchToProps)(Counter) 
