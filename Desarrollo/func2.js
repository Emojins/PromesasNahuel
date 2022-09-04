/* # Trabajando con Promesas

> 1. Transformar todas las funciones declarativas en funciones flecha.

> 2. Iplementar los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.

> 3. Simplificar el código de las funciones.

> 4. Transformar la función **funcionCuatro()** en una función asíncrona con la palabra reservada 
__async__ e implementarla junto con **await**.
 */

// Promesa almacenada en una constante
     const promesa = new Promise((resolve, reject)=>{
                   ( 10 === 11)
            ?resolve('Los valores son iguales')
            :reject('Los valores son distintos')
            });

  promesa.then(respuesta=>{console.log(respuesta)}).catch(respuesta =>{console.log(respuesta)})



// Promesa dentro en una función.
    const promesaDos = (provincia)=>{ return new Promise( (resolve, reject)=> {
                    ('Formosa' === provincia)
                    ?resolve('Usted está ubicado en Formosa')
                    :reject('Error al realizar la consulta')    
        });
    }
    promesaDos('Jujuy').then(respuesta=>{console.log(respuesta)}).catch(respuesta =>{console.log(respuesta)})


//3
    const promesaTres = (valorBooleano)=>{return new Promise( (resolve, reject)=> { 
             (true === valorBooleano)
            ?resolve('Los valores son iguales')
            :reject('Los valores son distintos')
        });
    }
    promesaTres(true).then(respuesta=>{console.log(respuesta)}).catch(respuesta =>{console.log(respuesta)})


//4

 const promesaCuatro = async ( arguments )=>{
    return (true === arguments )
    ? ('Los valores son iguales')
    : ('Los valores son distintos')

}    

console.log(promesaCuatro(false).then(res=>{console.log(res)}).catch(err =>{console.log(err)}))