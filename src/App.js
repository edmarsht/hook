import './App.css';
import { Brand, Navbar } from './components'
import { Features, Header, WhatHook } from './containers'

function App() {
  return ( 
    <div className="App">
    <div className="gradient__bg ">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatHook />
    <Features />

  </div>
  );
}

export default App;
