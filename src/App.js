import React from 'react';
import './App.css';
import CommentsListContaier from './CommentsListContainer.js';
import DevTools from './DevTools.js';

const App = () => {
  return (
    <div className='App'>
      Lista komentarzy:
      <CommentsListContaier />
      <DevTools />
    </div>
  );
};

export default App;
