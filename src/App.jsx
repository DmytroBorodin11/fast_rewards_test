import React from 'react';
import './css/App.css';
import mainbg from './assets/main_bg_big.png';
import bgBig from './assets/bg_big.png';
import mainbgMid from './assets/main_bg_mid.png';
import bgMid from './assets/bg_mid.png';
import bgImg1 from './assets/bg_img_1.png';
import bgImg2 from './assets/bg_img_2.png';
import bgImg3 from './assets/bg_img_3.png';
import bgImg4 from './assets/bg_img_4.png';
import bgImg5 from './assets/bg_img_5.png';
import bgImg6 from './assets/bg_img_6.png';
import bgImg7 from './assets/bg_img_7.png';
import bgImg8 from './assets/bg_img_8.png';
import bgImg9 from './assets/bg_img_9.png';
import bgImg10 from './assets/bg_img_10.png';
import bgMid2 from './assets/bg_mid_2.png';
import bgMin from './assets/bg_min.png';
import Form from './Components/Form';

function App() {
  return (
    <div className="app">
      <div className='app__wrap'>
          <img src={mainbg} className='main__bg__big' alt="main_big"/>
          <img src={bgBig} className='bg__big' alt="bg_big"/>
          <img src={mainbgMid} className='main__bg__mid' alt="main_mid"/>
          <img src={bgMid} className='bg__mid' alt="bg_mid"/>
          <img src={bgMid2} className='bg__mid_2' alt="bg__mid_2"/>
          <img src={bgMin} className='bg__min' alt="bg__min"/>
          <img src={bgImg1} alt="bg__img" className="bg__img" id="bg__img_1"/>
          <img src={bgImg2} alt="bg__img" className="bg__img" id="bg__img_2"/>
          <img src={bgImg3} alt="bg__img" className="bg__img" id="bg__img_3"/>
          <img src={bgImg4} alt="bg__img" className="bg__img" id="bg__img_4"/>
          <img src={bgImg5} alt="bg__img" className="bg__img" id="bg__img_5"/>
          <img src={bgImg6} alt="bg__img" className="bg__img" id="bg__img_6"/>
          <img src={bgImg7} alt="bg__img" className="bg__img" id="bg__img_7"/>
          <img src={bgImg8} alt="bg__img_min" id="bg__img_8" className="bg__img_min"/>
          <img src={bgImg9} alt="bg__img_min" id="bg__img_9" className="bg__img_min"/>
          <img src={bgImg10} alt="bg__img_min" id="bg__img_10" className="bg__img_min"/>
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
