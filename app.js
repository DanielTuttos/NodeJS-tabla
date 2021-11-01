const { crearArchivoTabla } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

console.clear();

console.log(argv);

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));

