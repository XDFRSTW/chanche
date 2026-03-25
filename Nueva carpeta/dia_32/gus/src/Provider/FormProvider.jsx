import { useState } from "react";
import { FormContext } from "../contexts/FormContext";

export function FormProvider({ children }) {
    let [name, setForm] = useState("");
    let [description, setDes] = useState("");
    
    let getName = localStorage.getItem("TaskName");
    let setName = [getName];


    let getDescription = localStorage.getItem("TaskDescription");
    let setDescription = [getDescription];


    const toggleForm = () => {
        setName.push(name)
        localStorage.setItem("TaskName",setName)

        setDescription.push(description)
        localStorage.setItem("TaskDescription",setDescription)
    };

    return (
        <FormContext.Provider value={{ name, toggleForm, setForm, description, setDes }}>
            {children}
        </FormContext.Provider>
    )
}