import React, { Component } from 'react'
import {connect} from 'react-redux'
class Counter extends Component {
   
    increment = () => {
       this.props.dispatch({type: 'INCREMENT'});
    }
    decrement = () => {
        this.props.dispatch({type: 'DECREMENT'});
    }
    render() {
        return (
            <div className = 'counter'>
                <h2>Counter</h2>
                <button onClick = {this.increment}>+</button>
                <span>{this.props.count}</span>
                <button onClick = {this.decrement}>-</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        count: state.count
    }
}
export default connect(mapStateToProps)(Counter);