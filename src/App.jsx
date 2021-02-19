import React from 'react';
import './css/App.css';
import mainbg from './assets/main_bg_big.png';
import bgBig from './assets/bg_big.png';
import mainbgMid from './assets/main_bg_mid.png';
import bgBigMid from './assets/bg_mid.png';
import Form from './Components/Form';

function App() {
  return (
    <div className="app">
      <div className='app__wrap'>
          <img src={mainbg} className='main__bg__big' alt="main_big"/>
          <img src={bgBig} className='bg__big' alt="bg_big"/>
          <img src={mainbgMid} className='main__bg__mid' alt="main_mid"/>
          <img src={bgBigMid} className='bg__mid' alt="bg_mid"/>
          
          <div className="form__wrap">
            <div className="form__container">
              <Form/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
