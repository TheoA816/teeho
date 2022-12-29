import Cloud from './clouds/Cloud';
import Ground from './ground/Ground';
import About from './about/About';
import Home from './home/Home';
import Vine from './vines/Vine';
import Contact from './contacts/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Cloud/>
      <Vine/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
