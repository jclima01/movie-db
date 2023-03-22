import { Route, Routes } from "react-router-dom";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <>

      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/:id" element={<Details/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
