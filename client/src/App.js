import Cloud from "./clouds/Cloud";
import About from "./about/About";
import Home from "./home/Home";
import Vine from "./vines/Vine";
import Contact from "./contacts/Contact";
import "./App.css";
import Portfolio from "./portfolio/Portfolio";

function App() {
  return (
    <div>
      <Cloud />
      <Vine />
      <Home />
      {/* <About/> */}
      {/* <Portfolio /> */}
      {/* <Contact/> */}
    </div>
  );
}

export default App;
