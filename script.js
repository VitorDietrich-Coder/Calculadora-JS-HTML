
function Soma() {
	let result;
	let  valor1 = parseFloat(document.getElementById("vetor1").value);
	let  valor2 = parseFloat(document.getElementById("vetor2").value);
	result = valor1 + valor2;
	document.getElementById("resultado").innerHTML  = result

}
function Dividir(){
	let result;
	let  valor3 = parseFloat(document.getElementById("vetor3").value);
	let  valor4 = parseFloat(document.getElementById("vetor4").value);
	result = valor3 / valor4;
	document.getElementById("resultado1").innerHTML  = result
}
function Subtrair() {
	let result;
	let  valor5 = parseFloat(document.getElementById("vetor5").value);
	let  valor6 = parseFloat(document.getElementById("vetor6").value);
	result = valor5 - valor6;
	document.getElementById("resultado2").innerHTML  = result

}
function Multiplicar(){
	let result;
	let  valor7 = parseFloat(document.getElementById("vetor7").value);
	let  valor8 = parseFloat(document.getElementById("vetor8").value);
	result = valor7 * valor8;
	document.getElementById("resultado3").innerHTML  = result
}


  function openWin1() {
    var  window1 = window.open("index1.html");   // Opens a new window
  }
  function openWin2() {
    var window2 = window.open("index2.html");   // Opens a new window
  }
  function openWin3() {
    var window3 = window.open("index3.html");   // Opens a new window
  }
  function openWin4() {
    var window4 = window.open("index4.html");   // Opens a new window

  }
  function closeWin1() {
    window1 = close("index.html");   // Closes the new window
  }
  