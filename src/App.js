import NavBar from "./components/NavBar";
import Banner  from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact  from "./components/Contact/Contact";
import Footer  from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;