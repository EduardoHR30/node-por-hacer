/*EJERCICIO*/
//======================================================================================================================
//Crear la configuración de yargs.

/*RESPUESTA*/
//----------------------------------------------------------------------------------------------------------------------

// const opts = {
//     crear: {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: 'Descripción de la tarea por hacer'
//         }
//     },
//     completado: {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: 'Descripción de la tarea por hacer'
//         },
//         completado: {
//             alias: 'c',
//             default: true,
//             desc: 'Marca como completado o pendiente la tarea'
//         }
//     }
// }

/*Optimización sugerida*/
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};

//----------------------------------------------------------------------------------------------------------------------

//======================================================================================================================
/*FIN DE EJERCICIO*/