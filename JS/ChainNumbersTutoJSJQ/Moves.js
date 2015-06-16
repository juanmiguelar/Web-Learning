
// Cuando el documento haya sido cargado
$(document).on('ready', function(){

	var numeros; // Etiqueta h1
	var next; // Boton siguiente
	var back; // Boton anterior
	var moves = new Moves(); // Creacion de objeto movimientos

		// Seleccionamos los elementos a utilizar
		numeros = $('#number');
		next = $('#next');
		back=document.getElementById("back");

		// Se muestra dentro de la etiqueta el numero actual
		numeros.text(moves.getCurrentNumber());

		// Evento, cada vez que el usuario haga click en el boton de siguiente
		next.click(function(){
			// El texto cambiara
			numeros.text(moves.next());

		});

		// Evento, cada vez que el usuario haga click en el boton de anterior
		back.onclick = function(){
			numeros.text(moves.back());

		};

	});


// Clase movimientos que se encarga de realizar los movimientos en el vector
function Moves(){

	// Vector con los numeros a mostrar en pantalla
	var chain = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	// Indice del numero actual en pantalla
	var index = 0;

	// Devuelve el numero siguiente al actual
	this.next = function(){

		if (index == chain.length -1) {
			index = 0;
			return chain[index];
		}else{
			index++;
			return chain[index];
		}
		
	};

	// Devuelve el numero anterior al actual
	this.back = function(){
		if (index <= 0) {
			index = chain.length - 1;
			return chain[index];

		}else{
			index--;
			return chain[index];

		}
	};

	// Devuelve el numero actual
	this.getCurrentNumber = function (){
		return chain[index];
	};
}
