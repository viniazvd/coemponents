import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import babel from 'rollup-plugin-babel'

import vue from 'rollup-plugin-vue'

import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    name: 'ACard',
    file: 'dist/js/card.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    vue({ css: false }),
    scss({
      output: 'dist/css/card.css',
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => result.css)
    }),
    terser()
  ]
}
