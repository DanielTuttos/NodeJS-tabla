const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base = 5, listar, hasta) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${i * base} \n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${i * base} \n`;
        }

        if (listar) {
            console.log('==========================='.green);
            console.log(`       Tabla del ${base}`.red);
            console.log('==========================='.green);
            console.log(consola);
        };

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`.rainbow;

    } catch (error) {
        throw error;
    }
    // console.log('creado correctamente');
}

module.exports = {
    crearArchivoTabla
}