import postcss from 'postcss'
import vue from 'rollup-plugin-vue'
import sass from 'rollup-plugin-sass'
import autoprefixer from 'autoprefixer'
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
    vue({ css: false }),
    terser(),
    sass({
      output: 'dist/card.css',
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => result.css)
    })
  ]
}
