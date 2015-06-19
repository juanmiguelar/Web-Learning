
// Cuando esta variable sea igual a 9 ya no se puede jugar
var turn = 0;

// Cuando el documento se cargue
$(document).on('ready', function(){

	// Se encuentra el td que esta causando el evento click
	$('#tabla-juego').find('td').on('click', function(){
		// Se le cambia el texto

		var str = $(this).text();

		if (str == 'O' || str == 'X') {

		}else{

			$(this).text(play());

		};
	});



});

function play(){
	if (turn == 9) {

		alert('Gracias por jugar');
	}else{

		// Es par
	if (turn % 2 == 0) {
		turn++;
		return 'X';

	}else{ // impar
		turn++;
		return 'O';
	};
	};
};

