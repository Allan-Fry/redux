import React from 'react';

import { AddPostForm } from './features/posts/AddPostForm.js';
import { Postslist } from './features/posts/PostsList.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <AddPostForm />
        <Postslist />
      </React.Fragment>
     
    </div>
  );
}

export default App;
