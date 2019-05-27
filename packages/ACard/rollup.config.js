import vue from 'rollup-plugin-vue'
import autoprefixer from 'autoprefixer'
import css from 'rollup-plugin-css-only'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/card.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    vue({
      css: false,
      style: {
        trim: false,
        postcssPlugins: [
          autoprefixer({ browsers: ['> 0.00001%'] })
        ]
      }
    }),
    css({ output: 'dist/card.css' }),
    terser()
  ]
}
