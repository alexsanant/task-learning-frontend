import {useState} from 'react';
import DeleteTaskModalComponent from './DeleteTaskModalComponent';
import FinishTaskModalComponent from './FinishTaskModalComponent';


function TaskTableComponent() {

    //creamos un hook con el contenido de la tabla
    const [dummyData, setDummyData] = useState( [

        {_id: 1, name: "Cocinar", description: "Cocinar galletas el Sábado", date_created: "08/08/2022", is_complete: true, date_finish: "10/08/2022"},
        {_id: 2, name: "Preparar proyecto", description: "Preparar proyecto para presentar en Septiembre", date_created: "09/08/2022", is_complete: false},
        {_id: 3, name: "Estudiar Java", description: "Aprender Java para cubrir las especificaciones dle proyecto", date_created: "19/08/2022", is_complete: true, date_finish: "20/08/2022"},
        {_id: 4, name: "Estudiar Python", description: "Estudiar fundamentos y sintaxis de Python", date_created: "21/08/2022", is_complete: false}

    ])

    //preparar hook para recuperar id, título y descripción
    const [_id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);

    //crear handle para id
    const dataHandle = (_id, name) => {
        return (event) => {
            setId(_id);
            setName(name);
        }
    }

    //crear handle para título
    const handleName = (event) => {
        setName(event.target.value);
    }


    //crear handle para descripción
    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    //crear handle para formulario
    const handleForm = (event) => {
        event.preventDefault();
        setDummyData(task=> [...task, {_id: 4, name: name, description: description}])
    }


    //crear table
    return (
        <div className="text-center container">
            <table className="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Título</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Fecha creación</th>
                        <th scope="col">Finalizada</th>
                        <th scope="col">Fecha finalización</th>
                        <th scope="col">Operaciones</th>
                    </tr>
                </thead>
                <tbody className="text-start">
                    {
                        dummyData.map(data => {
                            return(
                                <tr key={data._id}>
                                    <td className="text-center">{data._id}</td>
                                    <td className="text-center">{data.name}</td>
                                    <td className="text-center">{data.description}</td>
                                    <td className="text-center">{data.date_created}</td>
                                    <td className="text-center">{data.is_complete ? ('Si') : ('No')}</td>
                                    <td className="text-center">{data.date_finish ? (data.date_finish) : ('')}</td>
                                    <td className="text-center">
                                        <button type="button" onClick={dataHandle(data._id, data.name)} class="btn btn-sm btn-primary me-2" data-bs-toggle="modal" data-bs-target="#finishModal">Finalizar</button>
                                        <button type="button" onClick={dataHandle(data._id, data.name)} class="btn btn-sm btn-danger me-2" data-bs-toggle="modal" data-bs-target="#deleteModal">Eliminar</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                 
                </tbody>
            </table>
               {/* Crear un formulario para añadir nuevas tareas */}
               <div className='container'>
                            <form className="row input-group-sm" onSubmit={handleForm}>
                                <input className="col me-2 form-control form-sm" type="text" placeholder="Título" onChange={handleName} />

                                <input className="col me-2 form-control form-sm" type="text" placeholder="Descripción" onChange={handleDescription} />

                                <input className="col me-2 form-control btn btn-success" type="submit" value="Crear tarea" />
                            </form>
                    </div>
            {/*Añadimos el componente y le pasamos el hook id */}
            <FinishTaskModalComponent _id={_id} name={name} />
            <DeleteTaskModalComponent _id={_id} name={name} />  
        </div>
    )
}

export default TaskTableComponent;
