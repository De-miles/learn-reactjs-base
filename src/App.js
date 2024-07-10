import React from 'react';
// import './App.scss';
import TodoFeature from 'features/Todo/pages';
import { Route } from 'react-router-dom';
import AlbumFeature from 'features/Album/pages';

function App() {
  return (
    <div className="app">
      Header
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      Footer
    </div>
  );
}

export default App;
