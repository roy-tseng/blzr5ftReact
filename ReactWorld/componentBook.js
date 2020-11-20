import React from 'react';
import ReactDOM from 'react-dom';
import {Counter}  from './components/Counter/Counter.jsx'

export function ReactMain(id){
    ReactDOM.render(
        <React.StrictMode>
          <Counter/>
        </React.StrictMode>,
        document.getElementById(id)
      );
}