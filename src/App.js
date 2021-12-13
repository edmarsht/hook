import "./App.css";
import { Brand, Navbar, Cta } from "./components";
import { Features, Header, WhatHook, Possibility } from "./containers";

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
      <Possibility />
      <Cta />
    </div>
  );
}

export default App;
