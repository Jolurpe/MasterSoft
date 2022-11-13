//const { default: fetch } = require("node-fetch")

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
            //RegistrarPersona();
            RegistrarUsuario();
            event.preventDefault();
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function RegistrarPersona(params) {
    alert('Todo esta bien');
  }
  function RegistrarUsuario(){
    let nombres=document.querySelector("#validacionNombre").value;
    let apellidos=document.querySelector("#validacionApellidos").value;
    let correo=document.querySelector("#validacionCorreo").value;
    let telefono=document.querySelector("#validacionTelefono").value;
    let cedula=document.querySelector("#validacionCedula").value;
    let rol=document.querySelector("#validacionRol").value;

    let url=`http://localhost:3000/usuarios` ;
    let datos={
        cedula:cedula,
        nombre:nombres,
        apellido:apellidos,
        correo:correo,
        telefono:telefono,
        rol:rol
    };


 fetch(url, {
        method:'POST',
        body:JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(mensaje => {
        console.log(mensaje)
    })
  }