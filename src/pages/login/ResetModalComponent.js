import {Fragment, useState} from 'react';

//Recuperar campo estado del hook
function ResetModalComponent () {
    const [email, setEmail] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    //crear handle para el formulario
    const handleForm = (event) => {
        event.preventDefault(); 
        console.log(email);
    }

    //crear modal
    return(
        <Fragment>
            <div className="modal fade" id="resetPassword" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Reestablecer contraseña</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleForm}>
                                <div className="row">
                                    <div className="col text-center">
                                        <input type="email" className="form-control mt-3" placeholder="Email" onChange={handleEmail} />
                                        <input type="submit" className="btn btn-success form-control mt-3" value="Enviar" data-bs-dismiss="modal" />
                                        <small>Recibirás un email que te llevará a reestablecer tu contraseña</small>
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

export default ResetModalComponent;