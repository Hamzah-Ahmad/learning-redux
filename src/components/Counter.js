import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../actions'
class Counter extends Component {
   
    increment = () => {
       this.props.dispatch(increment());
    }
    decrement = () => {
        this.props.dispatch(decrement());
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