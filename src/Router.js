//importar funciones del módulo react router
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importar los componentes de vista
import TaskPage from './pages/tasks/TaskPage';
import UserPage from "./pages/users/UserPage";
import LoginPage from "./pages/login/LoginPage";

function Router() {
    //retornar la estructura de rutas
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<TaskPage />} />
                    {/* Añadir ruta para editar usuario */}
                    <Route path="/users" element={<UserPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    {/* Ruta para urls no establecidas (error 404 */}
                    <Route path="*" element={<h1>Error 404 - No se encuentra la página</h1>} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default Router;