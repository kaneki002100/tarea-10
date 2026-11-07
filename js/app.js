// Ejemplo
/*
{
  let nombre = "juan";
  let edad = 20;
  let estatura = 1.75;
  let activo = true;
  console.log(nombre);
  console.log(edad);
}

// Ejercicio 1
{
  let nombre = "Jesus";
  let edad = 25;
  let carrera = "Sistema Informatico";
  let promedio = 41;
  console.log(nombre);
  console.log(edad);

  // Ejemplo de prompt
  nombre = prompt("Ingrese su nombre");   // sin "let", reutiliza la variable
  console.log("Bienvenido " + nombre);
}

// Ejercicio 2
{
  let nombre = prompt("Ingrese su nombre");
  let ciudad = prompt("Ingrese su ciudad");
  let edad = prompt("Ingrese su edad");

  console.log("Nombre: " + nombre);
  console.log("Ciudad: " + ciudad);
  console.log("Edad: " + edad);
}
// ejemplo
{
  let edad = Number(prompt("Ingrese su edad"));
  if (edad >= 18) {
    console.log("Mayor de edad");
  }
}
*/
//Ejercicio 3
/*
{
  let num1 = Number(prompt("Ingrese el primer número"));
  let num2 = Number(prompt("Ingrese el segundo número"));

  if (num1 == num2) {
    console.log("Son iguales");
  } else if (num1 > num2) {
    console.log("El primer número es mayor");
  } else {
    console.log("El segundo número es mayor");
  }
}

//ejemplo
let nota = Number(prompt("Ingrese su nota"));

if (nota >= 61){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}
//Ejercicio 4

let edad = Number(prompt("Ingrese su edad"));
if (edad >= 18){
    console.log("Mayor de edad");
}else{
    console.log("Menor de edad");
}
    
//Ejemplo
{
    let nota = Number(prompt ("Ingrese nota"));

    if (nota >= 90){
        console.log("Excelente");
    }
    else if (nota >=70){
        console.log("Bueno");
    }
    else if (nota >= 61){
        console.log("Regular");
    }
    else{
        console.log("Reprobado");
    }
}

//Ejemplo de switch
{
    let opcion = Number(prompt("Ingrese opcion"));

    switch (opcion){
        case 1:
            console.log("Registrar");
            break;
        case 2:
            console.log("Modificar");
            break;
       default:
            console.log("Opcion no valida");
    }
}

//Ejercicio 5
{
    let opcion = Number(prompt("Ingrese una opcion"));

    switch (opcion){
        case 1:
            console.log("Enero");
            break;
        case 2:
            console.log("Febrero");
            break;
        case 3:
            console.log("Marzo");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Mayo");
            break;
        default:
            console.log("Opcion no valida");
    }
}
*/
//Ejemplo de ciclo for
{
    for (let i = 1; i <= 5; i++){
        console.log(i);
    }   
}
//Ejercicio 6

{
    for (let i = 1; i <= 50; i++){
        if (i % 2 == 0){
            console.log(i);
        }
    }
}