import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Register from "./components/Registrer/Register";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(state => state.user)

  useEffect(() => {
    if(!user) navigate("/")
  }, [user])
  
  
  return (
    <>
      {location.pathname !== "/" && <Nav />}

      {user ? (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />}></Route>{" "}
          <Route path="/register" element={<Register />} />{" "}
        </Routes>
      )}
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
