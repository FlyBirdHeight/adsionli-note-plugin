import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import cssnano from "cssnano";
import json from "@rollup/plugin-json";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

const extensions = [".ts", ".js", ".tsx"];
export default [
    typescript(),
    resolve({ mainFields: ["module", "main", "browser"] }),
    json(),
    commonjs({ extensions, sourceMap: true }),
    babel({ babelHelpers: "bundled", extensions }),
    postcss({
        plugins: [cssnano],
        extract: "dist/css/index.css"
    }),
    livereload(),
    serve({
        open: true,
        port: 7984,
        contentBase: 'public'
    })
]