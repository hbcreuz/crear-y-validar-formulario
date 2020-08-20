function validar() {
    var nombre
    nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    }

    alert(saludo);
}



/*

function validar(){
    var nombre;
    var correo;
    var telefono;
    var expresion;
  
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
  
    expresion = /\w+@\w+\.+[a-z]/;
  
    console.log(nombre + correo + telefono);
    console.log(expresion.test(correo));
  
  
    if(nombre === "" || correo ==="" || telefono === ""){
      alert("Todos los campos son obligatorios");
      return false;
    }
    else if(nombre.length >= 20){
      alert("El nombre es muy largo");
      return false;
    }
    else if(correo.length >=30){
      alert("El correo ingresado es muy largo");
      return false;
    }
    else if (!expresion.test(correo)){
      alert("Correo no valido");
      return false;
    }
    else if(telefono.length > 9){
      alert("El numero de telefono es muy largo");
      return false;
    }
    else if(isNaN(telefono)){
      alert("El telefono no es un numero");
    }
  
    var result = "Bienvenido "+nombre + " tu correo es: " +correo +" tu telefono es: "+telefono;
    alert(result);
    //return false;
    
    //return true;
  }