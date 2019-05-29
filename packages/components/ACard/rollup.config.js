import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import babel from 'rollup-plugin-babel'

import vue from 'rollup-plugin-vue'

import sass from 'rollup-plugin-sass'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

import css from 'rollup-plugin-css-only'
import { terser } from 'rollup-plugin-terser'

// import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    name: 'ACard',
    file: 'dist/js/card.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    vue(),
    sass({
      output: 'dist/css/card.css',
      // Processor will be called with two arguments:
      // - style: the compiled css
      // - id: import id
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => result.css)
    }),
    css({ output: false }),
    // uglify()
    terser()
  ]
}
