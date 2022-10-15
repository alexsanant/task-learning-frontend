//importar hook
import { useState } from 'react';

//cargar hoja de estilo
import './UserFormComponent.css';

//importar avatar por defecto
const avatar = require('../../assets/avatar.png');

function UserFormComponent () {
    //crear hook para datos del formulario
    const [form, setForm] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        file: null
    })



//creamos un manejador para los datos del formulario
const handleData = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name]: value});
}

//y otro para el archivo
const handleFile = (event) => {
    let file = {file: event.target.files[0]};
    setForm({...form, ...file})
}

//crear handle para el formulario
const handleForm = (event) => {
    event.preventDefault();
    console.log(form);
}

//cargar formulario
return (
    <div className="container mt-4 text-center">
        <form onSubmit={handleForm}>
            <div className="row">
                <div className="col">
                    <h3>Datos de usuario</h3>
                    <hr />
                    <img src={avatar} className="avatarEdit rounded img-thmbnail img-fluid" alt="Avatar" />
                    <input type="file" className="form-control mt-3" placeholder="Subir avatar" name="file" filename={form.file} onChange={handleFile} />
                    <input type="text" className="form-control mt-3" placeholder="Nombre" name="name" value={form.name} onChange={handleData} />
                    <input type="text" className="form-control mt-3" placeholder="Apellidos" name="lastname" value={form.lastname} onChange={handleData} />
                    <input type="email" className="form-control mt-3" placeholder="Email" name="email" value={form.email} onChange={handleData} />
                    <input type="password" className="form-control mt-3" placeholder="Nueva contraseña (dejar en blanco para no cambiar)" name="password" onChange={handleData} />
                    <input type="submit" className="btn btn-success form-control mt-3" value="Actualizar datos" />
                </div>
            </div>
        </form>
    </div>
)


}

export default UserFormComponent;