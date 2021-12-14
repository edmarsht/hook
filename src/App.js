import "./App.css";
import { Brand, Navbar, Cta } from "./components";
import { Features, Header, WhatHook, Possibility, Footer } from "./containers";

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
      <Footer />
    </div>
  );
}

export default App;
