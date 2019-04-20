const argv = require('./config/yargs').argv;
const colors = require('colors')
const porHacer = require('./por-hacer/toDo');

let comando = argv._[0];

const listar = (estado, listado) => {
    if (estado !== undefined) {
        let newList = listado.filter(item => String(item.completado) === String(estado));
        return newList;
    } else {
        return listado;
    }
}

switch (comando) {
    case 'crear':
        porHacer.crear(argv.d);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        listado = listar(argv.c, listado);
        listado.forEach(tarea => {
            console.log('=====Por Hacer====='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('==================='.green);

        });
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.d, argv.c);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.d);
        console.log(borrado);
        break;
    default:
        console.log('Comando incorrecto');
}