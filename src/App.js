import React from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  let fruits = ["Apple", "Mango", "Grapes", "Tomato"]
  return (
    <div className="App">
      Learn React!!
      {fruits.map((item,key)=>(
        <React.Fragment key={key}>
          <ErrorBoundary>
            <ChildComponent fruit = {item} />
          </ErrorBoundary>
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;





