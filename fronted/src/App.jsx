import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router"
import Register from "./components/register";
import Login from "./components/login";
import Index from "./components/index";
import "./App.css"

const App = () => {
  const token = localStorage.getItem("token");
  const [mensaje, setMensaje] = useState("");


  let length = 0;

  function fetchFix() {
    fetch("http://localhost:3000/profile")
      .then((response) => response.json())
      .then((data) => data.map((dat, index) => {dat.password == token ? length = index : console.log("no key avaible");}))
      .catch((error) => console.error("Error al obtener el mensaje", error));
  }


  useEffect(() => {
    fetchFix()
    if (token) {
      fetch("http://localhost:3000/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        // console.log(data.username))
        .then((response) => response.json())
        .then((data) => setMensaje(data[length].username))
        .catch((error) => console.error("Error al obtener el mensaje", error));
    }
    console.log(length)
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <p>{mensaje ? `Bienvenido, ${mensaje}` : "No estás autentificado"}</p>
      <button onClick={() => { localStorage.removeItem("token"); setMensaje(""); }}>Cerrar Sesión</button>
      <br />
      <a style={{color: "black"}} href="/">Refrescar</a>
    </>
  );
};

export default App;