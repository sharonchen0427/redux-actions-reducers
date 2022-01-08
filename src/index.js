import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../src/reducer/index'
import App from '../src/App'
import './index.css';
//creation of store and rendering our react app component.
const store = createStore( 
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)
render(
  
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */} 
    </Provider>, document.getElementById('root')
  

)