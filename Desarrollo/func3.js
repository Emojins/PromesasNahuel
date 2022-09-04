/* ## Consignas:
> 1. Transformar todas las funciones declarativas en funciones flecha.
> 2. Transformar las funciones en asíncronas con la palabra __async__.
> 3. Colocar la url correcta del método fetch teniendo en cuenta el nombre de la función que la contiene.
> 4. Luego de realizar el método fetch, implementar el método ".json()" sobre los datos obtenidos.
>5. Implementar **await** sobre todos los procesos asíncronos como consultas a la base de datos, conversión de formato json, etc.
> 6. Selecconar las funciones _*retrasar*_, _*obtenerPcias*_, _*obtenerDptos*_, _*obtenerLocalidades*_, luego cortarlas y pegarlas en el archivo funciones-exportadas que se encuentra en la carpeta _*libs*_.
> 7. Utilizar la palabra reservada **export** para exportar las funciones y que puedan ser utilizadas desde el archivo __app.js__. Pueden exportarlas una por una o como un solo objeto.
> 8. Implementar bloques try catch para el manejo de errores.  */



const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
const obtenerPcias = async ()=>{ 
    await retrasar(1800)

        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
        const objeto= await consulta.json()
     
return objeto  
}
obtenerPcias().then(resultado=>console.log(resultado))



// Función que retorna los datos de departamentos
const obtenerDptos = async ()=> {
    await retrasar(1400)
    const consulta1 = await fetch(`https://apis.datos.gob.ar/georef/api/departamentos?campos=completo&max=1000`)
    const departamentos= await consulta1.json()
    
    return departamentos 
 }
obtenerDptos().then(respuesta=>console.log(respuesta))


// Función que retorna los datos de localidades

 const obtenerLocalidades = async ()=> {
    await retrasar(900);
    const consulta2 = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?campos=completo&max=5000`)
    const localidades = await consulta2.json()

    return localidades
    
    }
    obtenerLocalidades().then(respuesta=>console.log(respuesta))

   
// Funcion para obtener todos los datos
const consultarDatos = () => {
    const provincias = obtenerPcias();
    const dptos = obtenerDptos();
    const localidades1 = obtenerLocalidades();

    console.log(provincias);
    console.log(dptos);
    console.log(localidades1);

}
consultarDatos();

