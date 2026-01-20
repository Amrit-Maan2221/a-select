import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const input = "src/index.js";

const globals = {
  jquery: "jQuery",
  "@popperjs/core": "Popper",
  bootstrap: "bootstrap",
};

const external = ["jquery", "@popperjs/core", "bootstrap"];

export default [
  {
    input,
    output: {
      file: "dist/aselect.cjs.js",
      format: "cjs",
    },
    external,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        babelrc: true,
      }),
    ],
  },
  {
    input,
    output: {
      file: "dist/aselect.esm.js",
      format: "esm",
    },
    external,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        babelrc: true,
      }),
    ],
  },
  {
    input,
    output: {
      file: "dist/aselect.umd.js",
      format: "umd",
      name: "ASelect",
      globals,
    },
    external,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        babelrc: true,
      }),
      terser(),
    ],
  },
];
