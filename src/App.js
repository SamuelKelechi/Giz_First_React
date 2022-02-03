import { useState } from 'react';
import Header from './Components/Header';
// import Hero from './Components/Hero'
import Mui from './Components/Mui.js'
import Card from './Components/Card'


function App(){
  return (
    <div>
        <Header />
        <br/>
        <br/>

      <Card />
      <Mui />
    
      {/* <Hero /> */}
    </div>
  );
}

export default App;
