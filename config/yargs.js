

const opciones = {
    base: {
    demand: true,
    alias: 'b',
    default: null
  },
  limite: {
    demand: true,
    alias: 'l',
    default: 10
  }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Creacion de tabla de multiplicar', opciones)
    .help()
    .argv


module.exports = {argv};








// qwe