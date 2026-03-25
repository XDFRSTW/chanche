import { NavLink, Outlet } from "react-router-dom";
import { FormProvider } from "../Provider/FormProvider";


const Layout = () => {
    
    return (
        <>
            <header>
                <h1>Queso</h1>
                <nav>
                    <NavLink to="/home"end>Inicio
                    </NavLink>
                    <NavLink to="/new-task"end>Nueva tarea
                    </NavLink>
                    <NavLink to="/edit/:id"end>Editar tarea
                    </NavLink>
                </nav>
            </header>
            <main>
           <Outlet />
            </main>
            <footer>
               &copy; Cavernícolas unidos
            </footer>
        </>
    );
}

export default Layout;