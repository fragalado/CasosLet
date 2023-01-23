/**
 *  PRUEBA TIPOS DE DATOS Y ESTRATEGIAS DE CONSULTA
 */
function pruebaTypeOf(){
	let variable1 = 10;
	let variable2 = 5.3;
	
	document.write(typeof(variable1));
	document.write(typeof variable2);
}

function pruebaBoolean(){
	let es = true;
	document.write(typeof(es));
	document.write(es);
}

function pruebaNumber(){
	let variable1 = 10;
	let variable2 = 5.3;
	
	document.write(typeof(variable1));
	document.write(typeof variable2);
}

function pruebaBigint(){
	let numeroGrande = 4567891324657987654;
	let numeroGrandeCasteado = BigInt(987654321654987654);
	
	document.write(typeof(numeroGrande));
	document.write(numeroGrande);
	document.write(typeof(numeroGrandeCasteado));
    document.write(numeroGrandeCasteado);
}

function pruebaString(){
	let texto = "Soy un string";
	
	document.write(typeof(texto));
	
	document.write(texto);
}

function pruebaUndefinied(){
	let variableVacia;
	document.write(variableVacia);
	
	document.write(typeof(variableVacia));
}

