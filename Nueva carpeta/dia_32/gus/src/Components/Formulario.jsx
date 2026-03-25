import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

export default function Formulario() {
    let {name, toggleForm, setForm, description, setDes} = useContext(FormContext)

    return (
            <div>
                <h2>Formulario queso</h2>
                <form>
                    <label htmlFor="name">Nombre de la tarea</label>
                    <input required id="name" value={name} placeholder="name" onChange={(e) => setForm(e.target.value)}></input>
                    
                    <label htmlFor="description">Descripción de la tarea</label>
                    
                    <input required id="description" value={description} placeholder="description" onChange={(e) => setDes(e.target.value)}></input>
                    <button onClick={name != "" && description != "" ? toggleForm : console.log("required")}>Crear tarea</button>
                </form>
            </div>
    )
}