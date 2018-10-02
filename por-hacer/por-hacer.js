const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    //                                                      //Convierte el objeto para guardarlo en un archivo JSON.
    let data = JSON.stringify(listadoPorHacer)

    /*EJERCICIO*/
    //Escribir la data en el fs
    //fs.writeFile('DB/data.json', data, (err) => {
    // if (err)
    //     console.log(err);
    // else
    //     console.log('Tarea guardada');    

    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    //                                                      //Para evitar un erros en el archivo json.
    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        //                                                  //Si el archivo json esta vacío, el arreglo también.
        listadoPorHacer = [];
    }
}

/*EJERCICIO*/
//======================================================================================================================
//Crear función para obtener tareas de la BD.
//Crear función para borrar tareas.

/*RESPUESTA*/
//----------------------------------------------------------------------------------------------------------------------
// const getListado = () => {
//     listadoPorHacer = require('../DB/data.json');
//     return listadoPorHacer;
// }

const borrar = descripcion => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        let borrado = listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

//----------------------------------------------------------------------------------------------------------------------

/*SOLUCIÓN*/
//----------------------------------------------------------------------------------------------------------------------
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

// const borrar = (descripcion) => {
//     cargarDB();

//     //                                                      //Permite filtrar el arreglo como queramos.
//     let nuevoListado = listadoPorHacer.filter(tarea => {
//         //                                                  //Regresa los elementos que cumplan con la condición.
//         return tarea.descripcion !== descripcion
//     });

//     if (listadoPorHacer.length === nuevoListado.length) {
//         return false;
//     } else {
//         listadoPorHacer = nuevoListado;
//         guardarDB();
//         return true;
//     }
// }

//----------------------------------------------------------------------------------------------------------------------

//======================================================================================================================
/*FIN DE EJERCICIO*/

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    //                                                      //Buscar tarea de acuerdo a la descripción.
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const crear = descripcion => {
    let porHacer = {
        descripcion,
        completado: false
    };

    cargarDB();

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}