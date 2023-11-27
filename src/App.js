import React, {Component} from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm'
import Rank from './components/rank/rank'
import './App.css';
import ParticleBackground from './components/particleBackground';


function App() {
  return (
    <div className="App">
      <ParticleBackground className='particles'/> 
      <Navigation/>
      <Logo/>
      <ImageLinkForm/>
      <Rank/>
      {/* <FaceRecognition/> */}
     

    </div>
  );
}

export default App;
