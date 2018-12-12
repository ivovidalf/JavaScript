var operandoa;
var operandob;
var operacion;


function Calculadora() {

	var display = document.getElementById('display');
	var on = document.getElementById('on');
	var punto = document.getElementById('punto');
	var igual = document.getElementById('igual');
	var dividido = document.getElementById('dividido');
	var por = document.getElementById('por');
	var menos = document.getElementById('menos');
	var mas = document.getElementById('mas');
	var uno = document.getElementById('1');
	var dos = document.getElementById('2');
	var tres = document.getElementById('3');
	var cuatro = document.getElementById('4');
	var cinco = document.getElementById('5');
	var seis = document.getElementById('6');
	var siete = document.getElementById('7');
	var ocho = document.getElementById('8');
	var nueve = document.getElementById('9');
	var cero = document.getElementById('0');

	uno.onclick = function(e){
		display.innerHTML = display.innerHTML + "1" - "0";
	}
	dos.onclick = function(e){
		display.innerHTML = display.innerHTML + "2" - "0";
	}
	tres.onclick = function(e){
		display.innerHTML = display.innerHTML + "3" - "0";
	}
	cuatro.onclick = function(e){
		display.innerHTML = display.innerHTML + "4" - "0";
	}
	cinco.onclick = function(e){
		display.innerHTML = display.innerHTML + "5" - "0";
	}
	seis.onclick = function(e){
		display.innerHTML = display.innerHTML + "6" - "0";
	}
	siete.onclick = function(e){
		display.innerHTML = display.innerHTML + "7" - "0";
	}
	ocho.onclick = function(e){
		display.innerHTML = display.innerHTML + "8" - "0";
	}
	nueve.onclick = function(e){
		display.innerHTML = display.innerHTML + "9" - "0";
	}
	cero.onclick = function(e){
		display.innerHTML = display.innerHTML + "0" - "0";
	}
	punto.onclick = function(e){
		display.innerHTML = display.innerHTML + ".";	
	}

	on.onclick = function(e){
		resetear();
	}

	mas.onclick = function(e){
		operandoa = display.innerHTML;
		operacion = "+";
		limpiar();
	}
	menos.onclick = function(e){
		operandoa = display.innerHTML;
		operacion = "-";
		limpiar();
	}
	por.onclick = function(e){
		operandoa = display.innerHTML;
		operacion = "*";
		limpiar();
	}
	dividido.onclick = function(e){
		operandoa = display.innerHTML;
		operacion = "/";
		limpiar();
	}
	igual.onclick = function(e){
		operandob = display.innerHTML;
		resolver();
	}
}

function limpiar(){
	display.innerHTML = "";
}

function resetear(){
	display.innerHTML = "0";
	operandoa = 0;
	operandob = 0;
	operacion = "";
}

function resolver(){
	var resultado = 0;
	switch(operacion){
		case "+":
			resultado = parseFloat(operandoa) + parseFloat(operandob);
			break;

		case "-":
			resultado = parseFloat(operandoa) - parseFloat(operandob);
			break;

		case "*":
			resultado = parseFloat(operandoa) * parseFloat(operandob);
			break;

		case "/":
			resultado = parseFloat(operandoa) / parseFloat(operandob);
			break;		
	}
	resetear();
	display.innerHTML = resultado;
}