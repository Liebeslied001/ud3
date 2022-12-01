const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

$(document).ready(function () {
	console.log('el documento esta preparado')
})

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	contra: /^.{8,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	celular: /^\d{8}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	contra: false,
	correo: false,
	celular: false
}

const validarFormulario = (campo) => {
	switch (campo.attr("id")) {
		case "usuario":
			validarCampo(expresiones.usuario, campo);
		break;
		case "nombre":
			validarCampo(expresiones.nombre, campo);
		break;
		case "correo":
			validarCampo(expresiones.correo, campo);
		break;
		case "celular":
			validarCampo(expresiones.celular, campo);
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.val())){
        console.log("correcto")
		input.removeClass("incorrecto")
		input.addClass("correcto")
	} else {
		console.log("incorrecto")
		input.addClass("incorrecto")
		input.removeClass("correcto")
	}
}


$("input").keypress(function(){
	// const input = $("input").attr("id")
	// const expIn = "expresiones." +input
	validarFormulario($(this))
})


