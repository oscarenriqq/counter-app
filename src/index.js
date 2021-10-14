import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './Counter';
import { Title } from './Title';

ReactDOM.render(
  <div className="container">
    <Title />
    <Counter />
  </div>,
  document.getElementById('root')
);
