// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/List';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
