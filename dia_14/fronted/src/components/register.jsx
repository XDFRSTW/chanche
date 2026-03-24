import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/users/register",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                history("/login")
            }
        }catch (error) {
            console.error("Error al registrar el usuario", error);
        }
    }

    return (
            <form onSubmit={handleSubmit}>
                <h2>Registrarse</h2>
                <input type="text" placeholder="Username" value={username} 
                onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} 
                onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Registrarse</button>
            </form>
    );
};

export default Register;