const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(err);
    });
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return listadoPorHacer;
}

const findSelectedIndex = (desc) => listadoPorHacer.findIndex(tarea => tarea.descripcion === desc);


const actualizar = (desc, completado) => {
    cargarDB();
    let index = findSelectedIndex(desc);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        console.log(listadoPorHacer[index]);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (desc) => {
    cargarDB();
    let index = findSelectedIndex(desc);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}