import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({ duration: "2000" });
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={`/*`} element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
