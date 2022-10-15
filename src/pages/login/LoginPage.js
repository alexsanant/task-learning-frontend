import {Fragment} from 'react';
import { useState } from 'react';

//Importar hoja de estilos
import './LoginPage.css';

//Importar los componentes modales
import RegisterModalComponent from './RegisterModalComponent';
import ResetModalComponent from './ResetModalComponent';

//Importar el componente alert
import AlertCommon from '../../common/AlertCommon';

//Crear función para cargar página de inicio
function LoginPage () {

    //crear hooks para la alerta
    const [alertSucess, setAlertSuccess] = useState(false);
    const [alertError, setAlertError] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    return(
        <Fragment>

        {/* Cargar el componente de alerta */}
        <AlertCommon alertSuccess={alertSucess} alertError={alertError} alertMessage={alertMessage} />
        <div className="bodystyle" text-center cz-shortcut-listen="true">
            <div className="form-signin text center">
                <form>
                    <h1 class="display-3 text-center">Login</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>

                    <div className='form-floating'>
                        <input type="password" className='form-control' id="floatingPassword" placeholder="Password" />
                        <label htmlFor='floatingPassword'>Contraseña</label>
                    </div>

                    <div className="mb-3 text-center">
                        <button type="button" className="cursor" data-bs-toggle="modal" data-bs-target="#registerUser">Crear Usuario</button>
                    </div>

                    <div className="mb-3 text-center">
                        <button type="button" className="cursor" data-bs-toggle="modal" data-bs-target="#resetPassword">¿Has olvidado la contraseña?</button>
                    </div>

                    <button className="w-100 btn btn-lg btn-info" type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
        <RegisterModalComponent setAlertSuccess={setAlertSuccess} setAlertError={setAlertError} setAlertMessage={setAlertMessage} />
        {/* pasar estados de la alerta */}
        <ResetModalComponent setAlertSucces={setAlertSuccess} setAlertError={setAlertError} setAlertMessage={setAlertMessage} />
        </Fragment>
    )
}


export default LoginPage;