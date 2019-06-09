import React from 'react';
import './App.css';
import CommentsListContaier from './CommentsListContainer.js';

const App = () => {
  return (
    <div className='App'>
      Tu będzie lista komentarzy!
      <CommentsListContaier />
    </div>
  );
};

export default App;
