import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Register from "./components/Registrer/Register";
import Watchlist from "./components/Watchlist/Watchlist";
import "./index.css";
function App() {
  const location = useLocation();
  const user = useSelector((state) => state.user);



  return (
    <div className="w-vw h-full">
      {location.pathname !== "/register" && location.pathname !== "/login" && (
        <Nav />
      )}

      {user ? (
        <Routes>
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail/:movieid" element={<Details />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/detail/:movieid" element={<Details />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
      {location.pathname !== "/login" && location.pathname !== "/login" && <Footer />}
    </div>
  );
}

export default App;
