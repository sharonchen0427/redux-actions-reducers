import React, { Component } from 'react';
class Counter extends Component {
   render() {
      const {counter,increment,decrement,reset} = this.props; //get methods and var from props after defined in reducers and containers
      return (
         <div className = "App">
            <div>{counter}</div>
            <div>
               <button onClick = {increment}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {decrement}>DECREMENT BY 1</button>
            </div>
            <button onClick = {reset}>RESET</button>
         </div>
      );
   }
}
export default Counter;