import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

export default {
    entry: 'src/index.js',
    dest: 'dist/index.js',
    plugins: [
        nodeResolve(),
        commonjs(),
        uglify({}, minify)
    ]
};