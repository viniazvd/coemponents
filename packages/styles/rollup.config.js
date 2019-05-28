import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'convenia/mixins.scss',
  // output: {
  //   file: 'dist/mixins.js',
  //   format: 'cjs',
  //   sourcemap: true
  // },
  plugins: [
    resolve(),
    commonjs(),
    css({ output: 'dist/mixins.css' }),
    vue({ css: false }),
    terser()
  ]
}
