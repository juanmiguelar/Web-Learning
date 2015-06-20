// Autor: Juan Miguel Arias Mejias B30619
// Cuando esta variable sea igual a 9 termina el juego
var turn = 0;

// Cuando el documento se cargue
$(document).on('ready', function(){

	// Se encuentra el td que esta causando el evento click
	$('#tabla-juego').find('td').on('click', function(){

		// Se obtiene el texto que contiene la parte del tablero que fue clicleada
		var str = $(this).text();

		// Si lo que se encuentra en la tabla tiene el valor por defecto
		if (str == '-') {
			// Se le cambia el texto
			var toPlay = play();
			// Se coloca el texto en la parte del tablero que fue clicleada
			$(this).text(toPlay);
			// Verificar el gane
			verificar(toPlay);
		};

		// Si se ha jugado 9 veces entonces termina el juego sin gane
		if (turn == 9) {
			alert("Gracias por jugar");
			clean();
		};
	});
});

// Metodo que indica qué caracter colocar
function play(){

		// Es par
	if (turn % 2 == 0) {
		turn++;
		return 'X';

	} else{ // impar
		turn++;
		return 'O';
	};
};

// Verifica si alguien ha ganado
function verificar(play){

	// Barra horizontal de arriba
	checkSide(play, 0, 1, 2);

	// Barra horizontal de en medio
	checkSide(play, 3, 4, 5);

	// Barra Horizontal de abajo
	checkSide(play, 6, 7, 8);

	// Vertical izquierda
	checkSide(play, 0, 3, 6);

	// Vertical Media
	checkSide(play, 1, 4, 7);

	// Vertical derecha
	checkSide(play, 2, 5, 8);

	// Diagonal izquierda derecha
	checkSide(play, 6, 4, 2);

	// Diagonal derecha izquierda
	checkSide(play, 0, 4, 8);

};

// Verifica si en un lugar especifico se ha ganado
// Play es el jugador
// id1, id2, id3 son las casillas a verificar
function checkSide(play, id1, id2, id3){
	// Si uno es diferente del caracter por defecto
	if ($('#tabla-juego').find('#'+id1).text() !== '-') {
		// Se verifica si el primero es igual al segundo
		if ($('#tabla-juego').find('#'+id1).text() == $('#tabla-juego').find('#'+id2).text()) {
			// Si el segundo es igual al tercero
			if ($('#tabla-juego').find('#'+id2).text() == $('#tabla-juego').find('#'+id3).text()) {
				// En caso de que esto pase significa que el jugador gano
				alert(play + " Win!");
				// Se limpia el tablero
				clean();
				// Termina el metodo
				return;
			};
		};
	};
};

// Limpia el tablero
function clean(){

	// Se reinicia
	turn = 0;
	// Limpia cada lugar del tablero
	for (var i = 0; i < 9; i++) {
		cleanSpace(i);
	};
	
};

// Limpia un lugar especifico del tablero
function cleanSpace(index){
	$('#tabla-juego').find('#'+index).text('-');
};
