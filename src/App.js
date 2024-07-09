import React from 'react';
// import './App.scss';
import TodoFeature from 'features/Todo/pages';
import AlbumFeature from 'features/Album/pages';
import Counter from 'features/Album/components/Counter';
import ColorBox from 'features/Album/components/colorBox';

function App() {
  return (
    <div className="app">
      <TodoFeature />
      {/* <AlbumFeature /> */}
      {/* <Counter />
      <ColorBox /> */}
    </div>
  );
}

export default App;
