<<<<<<< HEAD
const btnEnviar = document.getElementById('btn-enviar');

const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('nombre');
  const direcciónEmail = document.getElementById('email');
  if (isnumber(nombre.value) == true) {
    alert("Por favor, escribe un nombre valido.");
    nombre.focus();
    return false;
  }
    
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válidoooooo");
    emailAddress.focus();
    return false;
  }
  
  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

=======
const btnEnviar = document.getElementById('btn-enviar');

const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('nombre');
  const direcciónEmail = document.getElementById('email');
  if (isnumber(nombre.value) == true) {
    alert("Por favor, escribe un nombre valido.");
    nombre.focus();
    return false;
  }
    
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válidoooooo");
    emailAddress.focus();
    return false;
  }
  
  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

>>>>>>> fc2fbae1eac7713dc98aa20f25687fe5a7ce4d92
submitBtn.addEventListener('click', validate);