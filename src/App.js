import React from 'react';
import './App.css';
import Counter from './components/Counter';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);
const App = () => {
  return (
    <div className="App">
      <Provider store = {store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
