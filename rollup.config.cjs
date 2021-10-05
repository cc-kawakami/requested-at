const { babel } = require('@rollup/plugin-babel')
const { terser } = require('rollup-plugin-terser')

const pluginOptions = [
  babel({ exclude: 'node_modules/**' }),
  terser()
]

module.exports = {
  input: 'src/requested-at.js',
  output: [
    {
      file: 'dist/requested-at.cjs.min.js',
      format: 'cjs'
    },
    {
      file: 'dist/requested-at.umd.min.js',
      format: 'umd',
      name: 'SimpleDOMTransmitter'
    }
  ],
  plugins: pluginOptions
}
