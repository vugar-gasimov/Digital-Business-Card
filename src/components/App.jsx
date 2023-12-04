import "./App.css";
import About from "./About";
import Footer from "./Footer";

import Info from "./Info";
import Interests from "./Interests";

function App() {
  return (
    <div className="background">
      <div className="container">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
