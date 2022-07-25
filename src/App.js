import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/FirstPage';
import Main from './pages/Main';

function App() {
  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
