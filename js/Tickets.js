function validarFormulario() {
    const nombre = document.getElementById("name").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const mail = document.getElementById("mail").value.trim();
  
    if (nombre === "" || mail === "" || apellido === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }
    for (var i = 0; i < nombre.length; i++) {
        var charCode = nombre.CharCodeAt(i);G
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }
    for (var j = 0; j < apellido.length; j++) {
        var charCodeA = apellido.charCodeAt(j);
        if (!((charCodeA >= 65 && charCodeA <= 90) || (charCodeA >= 97 && charCodeA <= 122) || charCodeA === 32)) {
            alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }
    alert("Formulario enviado correctamente.");
    return true;
}
validarFormulario()

const valorTickets= 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let CantTickets = document.getElementById("Cantidad");
let categoria = document.getElementById("Categoria");

