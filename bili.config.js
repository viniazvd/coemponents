const { name } = require('./package.json')

const vue = require('rollup-plugin-vue')
const sass = require('rollup-plugin-sass')
const uglify = require('rollup-plugin-uglify')

module.exports = {
  js: 'buble',
  input: 'index.js',
  banner: true,
  format: ['umd', 'umd-min', 'cjs', 'es'],
  filename: name + '[suffix].js',
  exports: 'named', /** Disable warning for default imports */
  sourcemap: true,
  plugins: [
    sass(),
    vue(),
    uglify
  ]
}
