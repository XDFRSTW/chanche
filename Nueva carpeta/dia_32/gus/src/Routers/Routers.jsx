import {createBrowserRouter, useParams} from "react-router-dom"
import Layout from "../Layout/Layout";
import Formulario from "../Components/Formulario";
import Editar from "../Components/Editar";
import Tarea from "../Components/Tarea";
import Home from "../Components/Home";
import { FormProvider } from "../Provider/FormProvider";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/new-task",
                element: <Formulario/>
            },
            {
                path: "/edit/:id",
                element: <Editar/>
            },
             {
                path: "/task/:id",
                element: <Tarea/>
            }
        ]
    }
]);

export default Routers