import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Index from './pages/FirstPage';
import Main from './pages/Main';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
function App() {
  const location = useLocation();
  return (
    <div>
      <TransitionGroup>
        <CSSTransition timeout={300} classNames='fade' key={location.key}>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
