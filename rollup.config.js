import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  dest: 'build/index.js',
  format: 'iife',
  plugins: [babel()]
};