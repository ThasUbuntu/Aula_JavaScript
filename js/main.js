
function clicou(){
    document.getElementById("thanks").innerHTML = "Thank you for click";
    
    
    //console.log(document.getElementById("thanks"));
    //alert("thank you!");
}

function redirect(){
    window.open("https://www.youtube.com/watch?v=CBY60gepaTg&list=PLcHJQsukAW4pYEkjt5GITlmADcvSd-3bK&index=21&t=344s");
  //  window.location.href = "https://www.youtube.com/watch?v=CBY60gepaTg&list=PLcHJQsukAW4pYEkjt5GITlmADcvSd-3bK&index=21&t=344s";
}

function change(){
    document.getElementById("mousemove").innerHTML = "Say so";
   // alert("Change text")
}
function comeback(){
    document.getElementById("mousemove").innerHTML = "Thank you for click";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade")
console.log(validaIdade(idade));
*/

//alert(soma(5,10))


/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("vai Japão", "Japão", "Brasil"));
*/
/*
var d = new Date();
alert(d.getHours());
*/


/*
var count ;
for(count=0; count <=5; count++) {
    alert(count);
}
*/

/*
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}
*/

/*var idade = prompt("Qual sua idade");

if(idade >=24){
    alert("Liberado")
}else{
    alert("Acesso negado");
}
*/


//var nome = "Thais Souza";
//var idade = 24;
//var idade2 = 10;
//alert(idade+idade2);

//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace("Japão"))

//var lista = ["maça", "pera","laranja"];
//lista.push("uva");
//lista.pop
//console.log(lista);