import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                fetch("http://localhost:3000/profile")
                    .then((response) => response.json())
                    .then((data) => data.map((dat, index) => { dat.username == username ? localStorage.setItem("token", dat.password) : console.log("error inesperado") }))
                    .catch((error) => console.error("Error al obtener el mensaje", error));

                const data = await response.json();
                // localStorage.setItem("token", data.token);
                navigate("/");
                // data.token
            }
        } catch (error) {
            console.error("Error al iniciar sesión", error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <input type="text" placeholder="Usuario" value={username}
                onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Contraseña" value={password}
                onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
};

export default Login;