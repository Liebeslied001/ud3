const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	contra: /^.{8,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	celular: /^\d{9}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	contra: false,
	correo: false,
	celular: false
}

const validarFormulario = (e) => {
	switch (e.target.id) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'Usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'Nombre');
		break;
		// case "contra":
		// 	validarCampo(expresiones.contra, e.target, 'password');
		// 	validarPassword2();
		// break;
		// case "contra2":
		// 	validarPassword2();
		// break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'Correo');
		break;
		case "celular":
			validarCampo(expresiones.celular, e.target, 'Celular');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
        console.log("correcto")
		document.getElementById(`group${campo}`).classList.remove('incorrecto');
		document.getElementById(`group${campo}`).classList.add('correcto');
		// document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		// document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		// document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		// campos[campo] = true;
	} else {
		console.log("incorrecto")
        document.getElementById(`group${campo}`).classList.add('incorrecto');
		document.getElementById(`group${campo}`).classList.remove('correcto');
		// document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		// document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		// document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		// campos[campo] = false;
	}
}

inputs.forEach((input) =>{
    input.addEventListener('keyup',validarFormulario)
})
