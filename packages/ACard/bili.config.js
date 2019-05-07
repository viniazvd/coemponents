const { name } = require('./package.json')

const vue = require('rollup-plugin-vue')
const sass = require('rollup-plugin-sass')
const uglify = require('rollup-plugin-uglify')
const resolve = require('rollup-plugin-node-resolve')

module.exports = {
  js: 'buble',
  input: 'src/index.js',
  banner: true,
  format: ['umd', 'umd-min', 'cjs', 'es'],
  filename: name + '[suffix].js',
  exports: 'named',
  sourcemap: true,
  plugins: [
    sass(),
    vue(),
    resolve(),
    uglify
  ]
}
