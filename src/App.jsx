import React from 'react';
import './css/App.css';
import mainBg from './assets/main_bg_big.png';
import bgBig from './assets/bg_big.png';

function App() {
  return (
    <div className="app">
      <div className='app__wrap'>
          <img src={mainBg} className='main__bg' alt="main_bg"/>
          <img src={bgBig} className='bg__big' alt="bgBig"/>
      </div>
    </div>
  );
}

export default App;
