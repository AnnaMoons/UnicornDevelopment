/* Aplicación para asignacion de turnos */

/* 
for (let i= 0; i <=20; i++){
let nombre= prompt("Para obtener un turno debes ingresar tu nombre")
let mensaje =  `El turno para ${nombre} es el #${i}`;
alert(mensaje);
}
*/

/* Aplicación para elegir personajes */

/* 
while(true){
let numero = parseInt( prompt("Ingresa un número entre 1 y 6 para elegir tu personaje"));

if (numero === 1){
    alert ("¡Excelente! Elegiste a Bombón. Ahora puedes jugar.")
}
else if (numero === 2){
    alert ("¡Excelente! Elegiste a Burbuja. Ahora puedes jugar.")
}
else if (numero === 3){
    alert ("¡Excelente! Elegiste a Bellota. Ahora puedes jugar.")
}
else if (numero === 4){
    alert ("¡Excelente! Elegiste a El Alcalde. Ahora puedes jugar.")
}
else if (numero === 5){
    alert ("¡Excelente! Elegiste a El Profesor. Ahora puedes jugar.")
}
else if (numero === 6){
    alert ("¡Excelente! Elegiste a Mojojojo. Ahora puedes jugar.")
}
else if (numero >6) {
    alert ("El numero que ingresaste es incorrecto. Ingresa un número entre 1 y 6")
}
else{
    alert ("No se detecta un número ingresado. Ingresa un número entre 1 y 6")
} }
*/


let turistas = '';
for (let inscritos=0; inscritos <10; inscritos++){
    turistas += prompt ("Ingresa el nombre de la persona que se va a inscribir al Tour") + "\n";
}
alert (turistas);