function validar() {
    var nombre;
    var apellidos;
    var correo;
    var usuario;
    var password;
    var telefono;

    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    password = document.getElementById("password").value;
    telefono = document.getElementById("telefono").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || password === "" || telefono === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    } else if (apellidos.length > 80) {
        alert("Los apellidos son muy largos");
        return false;
    } else if (correo.length > 100) {
        alert("El correo es muy largo");
        return false;
    } else if (!expresion.test(correo)) {
        alert("Correo no válido");
        return false;
    } else if (usuario.length > 20 || password.length > 20) {
        alert("El usuario y la contraseña deben tener 20 caracteres como máximo");
        return false;
    } else if (telefono.length > 15) {
        alert("El teléfono contiene demasiados caracteres");
        return false;
    } else if (isNaN(telefono)) {
        alert("El teléfono solo debe contener números");
        return false;
    }

    var saludo = "Bienvenide " + nombre + " " + apellidos + ". Gracias por registrarte. Tu nombre de usuario es: " + usuario + " y tu contraseña es: " + password + ".";
    alert(saludo);
}