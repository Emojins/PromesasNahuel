/* ## Consignas
1. Copiar las funciones en un archivo JavaScript.
2. Simplificar la composición de los strings.
3. Simplificar escritura de los objetos literales.
4. Transformar las funciones básicas en funciones flecha.
5. Crear un repositorio con el nombre ES6-miNombre (nombre de cada uno de ustedes) 
y subir las soluciones a Github a través de la consola o GitHub Desktop. */

//1
 const saludar = (nombre)=>{
    return console.log(`Hola ${nombre}`);
}

// Mostrar el resultado por consola
saludar('Alejandro');



 //2
 const multiplicar = (a, b)=>{
    const resultado = a * b;
    return console.log(resultado);
}

// Mostrar el resultado por consola
multiplicar(3, 15)



//3
const crearAlumno = (nombre, apellido, edad, materias)=>({nombre,apellido,edad,materias}
    
    )

// Mostrar el resultado por consola.
console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))



//4
const devolverFecha = (dia,mes,año)=>{
    return console.log(`Hoy es ${dia}, ${mes}, ${año}`);
}

// Mostrar el resultado por consola.
devolverFecha('10','09','2022');
 