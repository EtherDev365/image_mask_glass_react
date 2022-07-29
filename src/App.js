import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/FirstPage';
import Main from './pages/Main';
import Slider from './pages/Slider';
function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Index />} />
          {/* <Route path="/main" element={<Main />} />*/}
          <Route path="/main" element={<Main />} /> 
          <Route path="/home" element={<Slider width={'100%'} height={'100%'} autoPlay={true} autoPlayTime={5000} />} />
        </Routes>
    </div>
  );
}

export default App;
