document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();//para q no se envie por ahora
  var tel = document.getElementById('tel').value;
  var email = document.getElementById('email').value;

  if((tel.length == 0) && (email.length == 0)) {
    alert('No has proporcionado ningun dato de contacto. Deberias brindarnos tu telefono o email');
    return;
  }
  this.submit();
}
