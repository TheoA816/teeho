import { useMediaQuery } from 'react-responsive'
import Cloud from './clouds/Cloud';
import About from './about/About';
import Home from './home/Home';
import Vine from './vines/Vine';
import Contact from './contacts/Contact';

function App() {

  const bigDevice = useMediaQuery({
    query: '(min-width: 888px)'
  })

  return (
    <div>
      { bigDevice && <Cloud/> }
      <Vine/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
