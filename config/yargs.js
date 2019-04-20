const desc = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}
const comp = {
    completado: {
        alias: 'c'
    }
}


const argv = require('yargs')
    .command('crear', 'crea una tarea', desc)
    .command('actualizar', 'Actualiza una tarea', { desc, comp })
    .command('borrar', 'Borra una tarea', desc)
    .command('listar', 'Lista las Tareas', comp)
    .help()
    .argv;

module.exports = {
    argv
}