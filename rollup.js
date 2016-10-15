import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import { minify } from 'uglify-js';

export default {
    entry: 'src/index.js',
    dest: 'dist/index.min.js',
    sourceMap: true,

    plugins: [
        nodeResolve(),
        commonjs(),

        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),

        uglify({}, minify)
    ]
};