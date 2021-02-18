import React from 'react';
import './css/App.css';
import mainbg from './assets/main_bg_big.png';
import bgBig from './assets/bg_big.png';

function App() {
  return (
    <div className="app">
      <div className='app__wrap'>
          <img src={mainbg} className='main__bg' alt="main_bg"/>
          <img src={bgBig} className='bg__big' alt="bgBig"/>
          <div className="form__wrap">
            <div className="form__container">
              
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
