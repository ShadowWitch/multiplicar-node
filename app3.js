
const {crearArchivo, mostrarTabla} = require('./multiplicar/multiplicar')
const {argv} = require('./config/yargs');
const colors = require('colors')

let base = argv.base;
let limite = argv.limite;

let comando = argv._[0];


switch (comando) {
  case 'listar':
    mostrarTabla(base, limite)
    break;

  case 'crear':
    crearArchivo(base, limite)
      .then(archivo => console.log(`Se ha creado: ${archivo}`))
      .catch(err => console.log('ERROR ACA', err))
    break;
    
  case 'ver':
    break;

  default:
    console.log('Comando no reconocido.');
    break;
}

// qwe