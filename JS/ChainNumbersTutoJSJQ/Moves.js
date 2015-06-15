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
	this.above = function(){
		// PROBLEMA 
		// Condicion no funciona cuando se quiere pasar del primer elemento hasta el ultimo
		// (index <= 0) realiza el cambio deseado luego de dos clicks
		if (index <= 0) {
			index = chain.length;
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