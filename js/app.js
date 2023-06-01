document.addEventListener('DOMContentLoaded', function() {
    
    const inputNombre = document.querySelector('#nombre');
    const inputTelefono = document.querySelector('#telefono');
    const inputEmail = document.querySelector('#email');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //Asignamos eventos
    inputNombre.addEventListener('blur', validar);
    inputTelefono.addEventListener('blur', validar);
    inputEmail.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if(e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            console.log(e.target.parentElement);
            return;
        }

        limpiarAlerta(e.target.parentElement);
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        //Generamos el HTML de la alerta
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('alerta-campo');

        //Inyectamos el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.alerta-campo');
        if(alerta) {
            alerta.remove();
        }
    }
});