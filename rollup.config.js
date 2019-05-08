import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'main.js',
  output: {
    file: 'index.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    VuePlugin(),
    terser()
  ]
}
