import React, { Component } from 'react';

class Counter extends Component {
    // Initialize state in the constructor
    constructor(props) {
        super(props);
        this.state = {
            count: 0 // Initial state value
        };
    }
    // Method to increment the count
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1 // Update state using setState
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default Counter;
