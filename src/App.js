import React, { Component } from 'react';
import './App.css';
import Counter from '../src/container/counterContainer';
// rendering counter container component as a child.
class App extends Component {
   render() {
      return (
         <div className = "App">
            <header className = "App-header">
               <Counter/>
               {/* child */} 
            </header>
         </div>
      );
   }
}
export default App;