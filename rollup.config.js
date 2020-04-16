import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs',
    },
    {
      file: 'lib/index.mjs',
      format: 'es',
    },
  ],
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
