import {Fragment, useState} from 'react';

//recuperar valores del estado de alert
function RegisterModalComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    //crear handle para el formulario
    const handleForm = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
    }

    //crear modal
    return(
        <Fragment>
            <div className="modal fade" id="registerUser" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registro</h5>
                            <button type="button"className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <form onSubmit={handleForm}>
                                <div className="row">
                                    <div className="col">
                                        <input type="email" className="form-control mt-3" placeholder='Email' onChange={handleEmail} />
                                        <input type="password" className="form-control mt-3" placeholder="Contraseña" onChange={handlePassword} />
                                        <input type="submit" className="btn btn-success form-control mt-3" value="Registrar" data-bs-dismiss="modal" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RegisterModalComponent;

