//importar fragment de bootstrap
import { Fragment } from "react";
import NavBarCommon from "../../common/NavbarCommon";
import TaskTableComponent from "./TaskTableComponent";

//crear función para listado de tareas
function TaskPage() {
    //retornar una cabecera de prueba
    return (
        <Fragment>
            {/* Cargar componentes */}
            <NavBarCommon />
            <TaskTableComponent />
        </Fragment>
    )
}

//exportar página
export default TaskPage;