//Codigo del Cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden "+ ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado es de: "+ perimetroCuadrado + "cm");

function areaCuadrada(lado) {
    return lado*lado;
}
//console.log("El area del cuadrado es de: "+ areaCuadrada + "cm^2");
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos");

// console.log(
//     "Los lados del triangulo miden "
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm"
// );

function alturaTriangulo(lado,base){
    return result = Math.sqrt((lado*lado)-((base*base)/4));
}
//console.log("La altura del Triangulo es de: "+ alturaTriangulo + "cm");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del cuadrado es de: "+ perimetroTriangulo + "cm");

function areaTriangulo(base,altura){
    return (base * altura)/2;
}
//console.log("El area del Triangulo es de: "+ areaTriangulo + "cm^2");

console.groupEnd();

//Codigo del Triangulo
console.group("Circulo");
//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");
//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");
//PI
const PI = Math.PI;
console.log("PI es de: " + PI + "cm");
//Perimetro
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio) * PI;
    return diametro;
}
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
//Area
function areaCirculo(radio){
    return PI*(radio*radio);
}
//console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();



// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    const result = document.getElementById("calculator__container--result");
    result.innerHTML = perimetro+"cm";
}

function calcularAreaCuadrada(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);

    const result = document.getElementById("calculator__container--result");
    result.innerHTML = area+"cm^2";
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");

    const lado1 = Number(input1.value);
    const lado2 = Number(input2.value);
    const base = Number(input3.value);

    const perimetro = perimetroTriangulo(lado1,lado2,base);

    const result = document.getElementById("calculator__container--result-triangle");
    result.innerHTML = perimetro+"cm";
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const input3 = document.getElementById("InputTrianguloBase");

    const lado1 = Number(input1.value);
    const base = Number(input3.value);

    const altura = alturaTriangulo(lado1,base);

    const result = document.getElementById("calculator__container--result-triangle");
    result.innerHTML = altura+"cm";
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const input3 = document.getElementById("InputTrianguloBase");

    const lado1 = Number(input1.value);
    const base = Number(input3.value);

    const altura = alturaTriangulo(lado1,base);

    const area = areaTriangulo(base,altura);

    const result = document.getElementById("calculator__container--result-triangle");
    result.innerHTML = area+"cm^2";
}


function calculadora(opcion){
    const title = document.getElementById("selected__calculator")
    const square_calc = document.getElementById("square-calculator__container");
    const triangle_calc = document.getElementById("triangle-calculator__container");
    switch(opcion){
        case 1:
            square_calc.style.display="block";
            triangle_calc.style.display="none";
            // title.textContent="Cuadrado";
            title.innerText = "Cuadrado";
            break;
        case 2:
            square_calc.style.display="none";
            triangle_calc.style.display="block";
            title.textContent="Triangulo";
            break;
        case 3:
            square_calc.style.display="none";
            triangle_calc.style.display="none";
            title.textContent="Circulo";
            break;
    }
}