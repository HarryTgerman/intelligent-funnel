import React from 'react';
import './App.scss';
import Funnel from './components/Funnel/index';
import { imagePath } from './utils/assetUtils';
import "antd/dist/antd.css";
import { StoreProvider } from './Context/Store';
import ProgressBar from './components/Progressbar';
import NavbarStatus from './components/Funnel/navbarStatus';

function App() {
  console.log(process.env.NODE_ENV)
  return (
    <div className="App">
    <StoreProvider>
      <header className="App-header">
      </header>
      <div className="bodyWrapper">
        <div className="navWrapper">
          <a href="https://mysoftwarescout.de" target="_blank" className="logoLink">
            <img className="logo" src={imagePath('logo.svg')}></img>
          </a>
          <div className="progressWrapper">
            <NavbarStatus />
          </div>
          <div className="supportWrapper">
            <div className="innerWrapperSupport">
              <div>
                <img className="phoneSupport" src={imagePath('phone.svg')} />
                <p className="supportHeadline">Kostenlose Beratung</p>
              </div>
              <p className="supportDescription">Lassen Sie Sich kostenlos von einem unabhängigen Experten unterstützen!</p>
              <a className="supportNumber" href="tel:+49 1573 599 4840">+49 1573 599 4840</a>
            </div>
          </div>
          <div className="legalwrapper">
              <a href="https://mysoftwarescout.de/impressum/" target="_blank">Impressum</a>
              <a href="https://mysoftwarescout.de/datenschutzerklaerung/" target="_blank">Datenschutzerklärung</a>
          </div>
        </div>
        <div className="funnelWrapper">
          
            <ProgressBar />
            <Funnel/>
          
          <div className="trustContainer">
            <span>Unterstützt von:</span>
            <img className="trustBadges" src={imagePath('trustBadges.png')}></img>
          </div>
        </div>
      </div>
      </StoreProvider>
    </div>
  );
}

export default App;
