/**
 * 	EJEMPLOS USANDO CHARAT()
 */
let texto = "Francisco Jose Gallego Dorado";

for(let i=0; i < texto.length; i++){
	console.log("Caracter numero "+i+ ": " + texto.charAt(i) + "\n"); // Esto imprime en la consola
}

// Mostramos por consola el primer carácter de la variable texto
console.log("primer caracter del texto \"Francisco Jose Gallego Dorado\": " + texto.charAt(0));
// Mostramos por consola el último carácter de la variable texto
console.log("ultimo caracter del texto \"Francisco Jose Gallego Dorado\": " + texto.charAt(texto.length - 1));

/* ESTO MUESTRA UNA ALERTA POR CADA CARACTER DE LA VARIABLE
for(let j=0; j < texto.length; j++){
	alert(texto.charAt(j));
}
*/

let primerCaracter = texto.charAt(0);
let ultimoCaracter = texto.charAt(texto.length - 1);
alert("Primer caracter: " + primerCaracter + "\nUltimo caracter: " + ultimoCaracter);

/* ESTO IMPRIME POR PANTALLA CADA CARACTER DANDO UN SALTO DE LINEA
for(let i=0; i < texto.length; i++){
	document.write(texto.charAt(i) + "<br>");
}
*/