/*Variables*/

function suma(){
	var a=parseInt(prompt("Ingresa un número"))
	var b=parseInt(prompt("Ingresa un segundo número"))
	var suma=a+b;
	console.log(suma)
}

function suma(a,b){
	console.log(a+b);
}

function division(){
	var D=parseInt(prompt("Ingresa el dividendo: ")),
		d=parseInt(prompt("Ingresa el divisor: "));
		resultado=D/d;
		alert("El resultado de la división es: " + resultado)
}

function convertirEdad(){
	var nombre=prompt("Cuál es tu nombre?"),
		edad=parseInt(prompt("Mucho gusto, "+nombre+ ", ¿cuántos años tienes?")), dias;
		dias=edad*365
		alert("Wow, has vivido algo o más de "+dias+" días. Qué se siente ser tan viejo(a)?")
}

function areaCirculo(){
	var pi=3.14;
	var radio = parseInt(prompt("Ingresa el radio del circulo: "));
	var area = pi * radio * radio;
	alert("El área del circulo de radio "+radio+" es "+area);
}

function llamada(){
	var tiempo = parseInt(prompt("Ingrese el número de minutos que duró su llamada: "));
	var costo = parseInt(prompt("Ingrese el costo por minuto: "));
	var costoLlamada = tiempo * costo;
	alert("El costo total de su llamada es " +costoLlamada+" soles/euros");
}

function determinante(){
	var a11 = parseFloat(prompt("Ingrese el valor de a11:"));
	var a12 = parseFloat(prompt("Ingrese el valor de a12:"));
	var a21 = parseFloat(prompt("Ingrese el valor de a21:"));
	var a22 = parseFloat(prompt("Ingrese el valor de a22:"));
	var resultado = a11 * a22 - a12 * a21;
	alert("El valor del determinante es " + resultado);
}

/*Condicionales*/

function mayor(){
	var a=parseFloat(prompt("Ingresa el primer número: ")),
	b=parseFloat(prompt("Ingresa el segundo número: ")),
	mayor=a;
		if(mayor<=b)
			mayor=b;
		alert("El mayor es: "+mayor);
}

function positivo(){
	var a = parseFloat(prompt("Ingrese el número: "));
	if(a >= 0){
		alert("El número "+ a + " es positivo");
	}else{
		alert("El número "+ a + " es negativo");
	}
}

function almacenesHarapiento(){
	var precio = parseFloat(prompt("Ingrese el precio del traje ($): "));
	var descuento,total;
	if(precio>2500){
		descuento = (15/100) * precio;
	}else{
		descuento = (8/100) * precio;
	}
	total = precio - descuento;
	alert("Precio final: $"+ total + ",el descuento fue de $"+descuento );
}

function banquete(){
	var costoXPlatillo;
	var numeroPersonas = parseInt(prompt("Ingrese el número de personas que participan en el banquete:"));
	if(numeroPersonas>0 && numeroPersonas<=200){
		costoXPlatillo = 95;
	}else if(numeroPersonas>200 && numeroPersonas<=300){
		costoXPlatillo = 85;
	}else if(numeroPersonas>300){
		costoXPlatillo = 75;
	}

	var presupuesto = numeroPersonas * costoXPlatillo;
	alert("El presupuesto total es "+presupuesto);
}


/*Estructuras Repetitivas*/
function whileDiez(){
	var i=1;
	while(i<=4){
		console.log(i)
		i=i+1
	}
}


function sumaWhile(){
	var i=1,
	suma=0;
	while(i<=4){
		suma=suma+i;
		i++
	}
	alert("La suma es "+suma)
}

function sumaDoWhile(){
	var i=1;
	suma=0;
	do{
		suma=suma+i;
		i=i+1;
	}while(i<=4)
	console.log(suma);
}

function sumaFor(){
	
	for(i=1;i<=4;i++){
		suma=suma+i;
	}
	alert(suma);
}

function paresCien(){
	var i=0;
	while(i<=100){
		if(i%2===0){
			console.log(i);
		}
		i = i+1;
	}
}

function tabla(){
	var numero = parseInt(prompt("Ingrese un número para calcular su tabla de multiplicar:"));
	var resultado;
	for(i=0;i<=12;i++){
		resultado = numero * i;
		console.log(numero + "*" + i + "="+resultado);
	}
}

function factorial(){
	var n=parseInt(prompt("Ingrese un número:"));
	var i=1,f=1;
	while(i<=n){
		f = f *i;
		i=i+1;
	}
	alert("Factorial de "+n + " es "+f);
}

function multiplos11(){
	var i=0;
	var suma = 0;
	while(i<3000){
		if(i%11 === 0){
			console.log(i);
			suma = suma + i;
		}
		i = i +1;
	}
	alert("La suma de los multiplos de 11 menores de 3000 es "+suma);
}


/*Arreglos*/
function añadirArray(){
	var array = ["Charles", "Keith", "Ronnie"];
	for(i=1;i<=2;i++){
		array.push("Mick");
	}
	console.log(array);
}

function creandoArray(){
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
	alert(meses);
}

function sumaArray(){
	var numeros = [];
	var suma=0;
	for(i=0;i<10;i++){
		numeros[i] = parseFloat(prompt("Ingrese el numero["+i+"]:"));
		suma = suma + numeros[i];
	}	

	alert("La suma total es "+suma);
}

/*Miscelánea*/
function paroimpar(){
	var numero = parseInt(prompt("Ingrese un número:"));
	if(numero%2 === 0){
		alert("El número "+numero+" es par.");
	}else{
		alert("El número "+numero+" es impar.");		
	}
}

function mayomin(){
	var texto = prompt("Ingrese un texto:");
	if(texto === texto.toLowerCase()){
		alert("La cadena esta formada por minúsculas");
	}else if(texto === texto.toUpperCase()){
		alert("La cadena esta formada por mayúsculas");
	}else{
		alert("La cadena esta formada por mayúsculas y minúsculas");
	}
}

function primo(){
	var numero = parseInt(prompt("Ingrese un número:"));
	var i=1;
	var numDivisores=0;
	if(numero>1){
		while(i<=numero){
			if(numero%i === 0){
				numDivisores = numDivisores + 1;
			}
			i = i+1;
		}
	}


	if(numDivisores===2){
		alert("El número "+numero + " es primo");
	}else{
		alert("El número "+numero + " no es primo");
	}
}

function cantidadDigitos(){
	var numero = prompt("Ingrese un número:");
	var entero = parseInt(numero);
	if(entero>0){
		alert("Cantidad de dígitos "+numero.length);
	}
}

