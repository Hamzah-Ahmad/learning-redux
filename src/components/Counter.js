import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../actions'
class Counter extends Component {
    increment = () => {
       this.props.increment();
    }
    decrement = () => {
        this.props.decrement();
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
function mapDispatchToProps(dispatch){
    return{
        increment: () => {dispatch(increment())},
        decrement: () => {dispatch(decrement())}

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

