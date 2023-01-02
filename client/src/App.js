import { useMediaQuery } from 'react-responsive'
import Cloud from './clouds/Cloud';
import About from './about/About';
import Home from './home/Home';
import Vine from './vines/Vine';
import Contact from './contacts/Contact';

function App() {

  const mobile = useMediaQuery({
    query: '(pointer:coarse)'
  })

  return (
    <div>
      { !mobile && <Cloud/> }
      <Vine/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
