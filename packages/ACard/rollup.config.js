import postcss from 'postcss'
import vue from 'rollup-plugin-vue'
import sass from 'rollup-plugin-sass'
// import css from 'rollup-plugin-css-only'
import autoprefixer from 'autoprefixer'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/card.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    // css({ output: 'dist/card.css' }),
    vue({
      css: false
      // style: {
      //   trim: false,
      //   postcssPlugins: [
      //     autoprefixer({ browsers: ['> 0.00001%'] })
      //   ]
      // }
    }),
    terser(),
    sass({
      output: 'dist/card.css',
      options: {
        includePaths: ['node_modules']
      },
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => result.css)
    })
  ]
}
