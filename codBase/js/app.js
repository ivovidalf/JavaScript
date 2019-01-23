document.documentElement.innerHTML.onload = Calculadora();

function Calculadora() {

	var display = document.getElementById('display');
	var on = document.getElementById('on');
	var sign = document.getElementById('sign');
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
	var operandoa;
	var operandob;
	var operacion;
	var dotCount = 0;

	uno.onclick = function(e){
		display.innerHTML = display.innerHTML + "1" - "0";
		limitTxt();
	}

	uno.onmousedown = function(e){
		uno.style.transform="scale(0.8)";
	}
	uno.onmouseup = function(e){
		uno.style.transform="scale(1.0)";
	}
	uno.onmouseout = function(e){
		uno.style.transform="scale(1.0)";
	}

	dos.onclick = function(e){
		display.innerHTML = display.innerHTML + "2" - "0";
		limitTxt();
	}
	dos.onmousedown = function(e){
		dos.style.transform="scale(0.8)";
	}
	dos.onmouseup = function(e){
		dos.style.transform="scale(1.0)";
	}
	dos.onmouseout = function(e){
		dos.style.transform="scale(1.0)";
	}
	tres.onclick = function(e){
		display.innerHTML = display.innerHTML + "3" - "0";
		limitTxt();
	}
	tres.onmousedown = function(e){
		tres.style.transform="scale(0.8)";
	}
	tres.onmouseup = function(e){
		tres.style.transform="scale(1.0)";
	}
	tres.onmouseout = function(e){
		tres.style.transform="scale(1.0)";
	}
	cuatro.onclick = function(e){
		display.innerHTML = display.innerHTML + "4" - "0";
		limitTxt();
	}
	cuatro.onmousedown = function(e){
		cuatro.style.transform="scale(0.8)";
	}
	cuatro.onmouseup = function(e){
		cuatro.style.transform="scale(1.0)";
	}
	cuatro.onmouseout = function(e){
		cuatro.style.transform="scale(1.0)";
	}
	cinco.onclick = function(e){
		display.innerHTML = display.innerHTML + "5" - "0";
		limitTxt();
	}
	cinco.onmousedown = function(e){
		cinco.style.transform="scale(0.8)";
	}
	cinco.onmouseup = function(e){
		cinco.style.transform="scale(1.0)";
	}
	cinco.onmouseout = function(e){
		cinco.style.transform="scale(1.0)";
	}
	seis.onclick = function(e){
		display.innerHTML = display.innerHTML + "6" - "0";
		limitTxt();
	}
	seis.onmousedown = function(e){
		seis.style.transform="scale(0.8)";
	}
	seis.onmouseup = function(e){
		seis.style.transform="scale(1.0)";
	}
	seis.onmouseout = function(e){
		seis.style.transform="scale(1.0)";
	}
	siete.onclick = function(e){
		display.innerHTML = display.innerHTML + "7" - "0";
		limitTxt();
	}
	siete.onmousedown = function(e){
		siete.style.transform="scale(0.8)";
	}
	siete.onmouseup = function(e){
		siete.style.transform="scale(1.0)";
	}
	siete.onmouseout = function(e){
		siete.style.transform="scale(1.0)";
	}
	ocho.onclick = function(e){
		display.innerHTML = display.innerHTML + "8" - "0";
		limitTxt();
	}
	ocho.onmousedown = function(e){
		ocho.style.transform="scale(0.8)";
	}
	ocho.onmouseup = function(e){
		ocho.style.transform="scale(1.0)";
	}
	ocho.onmouseout = function(e){
		ocho.style.transform="scale(1.0)";
	}
	nueve.onclick = function(e){
		display.innerHTML = display.innerHTML + "9" - "0";
		limitTxt();
	}
	nueve.onmousedown = function(e){
		nueve.style.transform="scale(0.8)";
	}
	nueve.onmouseup = function(e){
		nueve.style.transform="scale(1.0)";
	}
	nueve.onmouseout = function(e){
		nueve.style.transform="scale(1.0)";
	}
	cero.onclick = function(e){
		display.innerHTML = display.innerHTML + "0" - "0";
		limitTxt();
	}
	cero.onmousedown = function(e){
		cero.style.transform="scale(0.8)";
	}
	cero.onmouseup = function(e){
		cero.style.transform="scale(1.0)";
	}
	cero.onmouseout = function(e){
		cero.style.transform="scale(1.0)";
	}
	on.onclick = function(e){
		resetear();
	}
	on.onmousedown = function(e){
		on.style.transform="scale(0.8)";
	}
	on.onmouseup = function(e){
		on.style.transform="scale(1.0)";
	}
	on.onmouseout = function(e){
		on.style.transform="scale(1.0)";
	}

	mas.onclick = function(e){
		operandoa = display.innerHTML;
		operacion = "+";
		limpiar();
	}
	mas.onmousedown = function(e){
		mas.style.transform="scale(0.8)";
	}
	mas.onmouseup = function(e){
		mas.style.transform="scale(1.0)";
	}
	mas.onmouseout = function(e){
		mas.style.transform="scale(1.0)";
	}
	menos.onclick = function(e){
		operandoa = display.innerHTML;
		operacion = "-";
		limpiar();
	}
	menos.onmousedown = function(e){
		menos.style.transform="scale(0.8)";
	}
	menos.onmouseup = function(e){
		menos.style.transform="scale(1.0)";
	}
	menos.onmouseout = function(e){
		menos.style.transform="scale(1.0)";
	}
	por.onclick = function(e){
		operandoa = display.innerHTML;
		operacion = "*";
		limpiar();
	}
	por.onmousedown = function(e){
		por.style.transform="scale(0.8)";
	}
	por.onmouseup = function(e){
		por.style.transform="scale(1.0)";
	}
	por.onmouseout = function(e){
		por.style.transform="scale(1.0)";
	}
	dividido.onclick = function(e){
		operandoa = display.innerHTML;
		operacion = "/";
		limpiar();
	}
	dividido.onmousedown = function(e){
		dividido.style.transform="scale(0.8)";
	}
	dividido.onmouseup = function(e){
		dividido.style.transform="scale(1.0)";
	}
	dividido.onmouseout = function(e){
		dividido.style.transform="scale(1.0)";
	}
	igual.onclick = function(e){
		operandob = display.innerHTML;
		resolver();
		limitTxt();
	}
	igual.onmousedown = function(e){
		igual.style.transform="scale(0.8)";
	}
	igual.onmouseup = function(e){
		igual.style.transform="scale(1.0)";
	}
	igual.onmouseout = function(e){
		igual.style.transform="scale(1.0)";
	}

	punto.onclick = function(e){
		if (dotCount == 0) {
			display.innerHTML = display.innerHTML + ".";
			dotCount++;
		} else {}

	}
	punto.onmousedown = function(e){
		punto.style.transform="scale(0.8)";
	}
	punto.onmouseup = function(e){
		punto.style.transform="scale(1.0)";
	}
	punto.onmouseout = function(e){
		punto.style.transform="scale(1.0)";
	}

	sign.onclick = function(e){
		if(display.innerHTML != 0){
			var n = display.innerHTML;
			n = n * -1;
			display.innerHTML = n
		} else {}	
	}

	sign.onmousedown = function(e){
		sign.style.transform="scale(0.8)";
	}
	sign.onmouseup = function(e){
		sign.style.transform="scale(1.0)";
	}
	sign.onmouseout = function(e){
		sign.style.transform="scale(1.0)";
	}

	function limitTxt(){
		if (display.innerHTML.length >= 8){
			display.innerHTML = display.innerHTML.substring(0, 8);
		}
	};	


	function limpiar(){
	display.innerHTML = "";
	dotCount = 0;
	}

	function resetear(){
		display.innerHTML = "0";
		dotCount = 0;
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
	

}