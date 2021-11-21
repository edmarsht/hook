import './App.css';
import { Article, Brand, Cta, Navbar } from './components'
import { Header } from './containers'

function App() {
  return ( 
    <div className="App">
    <div className="gradient__bg ">
      <Navbar />
      <Header />
    </div>
    <Brand />
  </div>
  );
}

export default App;
