import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const input = "src/index.js";

const globals = {
  jquery: "jQuery",
  "@popperjs/core": "Popper",
  bootstrap: "bootstrap",
};

const external = ["jquery", "@popperjs/core", "bootstrap"];

const base = {
  input,
  external,
};

/* ---------------- NORMAL BUILD ---------------- */

const normalPlugins = [
  resolve(),
  commonjs(),
  postcss({
    extract: "aselect.css",
    minimize: false,
    plugins: [autoprefixer()],
  }),
  babel({
    babelHelpers: "bundled",
    exclude: "node_modules/**",
    babelrc: true,
  }),
];

/* ---------------- MINIFIED BUILD ---------------- */

const minPlugins = [
  resolve(),
  commonjs(),
  postcss({
    extract: "aselect.min.css",
    minimize: true,
    plugins: [
      autoprefixer(),
      cssnano({ preset: "default" }),
    ],
  }),
  babel({
    babelHelpers: "bundled",
    exclude: "node_modules/**",
    babelrc: true,
  }),
  terser(),
];

export default [
  // Normal
  {
    ...base,
    plugins: normalPlugins,
    output: [
      { file: "dist/aselect.cjs.js", format: "cjs" },
      { file: "dist/aselect.esm.js", format: "esm" },
      {
        file: "dist/aselect.umd.js",
        format: "umd",
        name: "ASelect",
        globals,
      },
    ],
  },

  // Minified
  {
    ...base,
    plugins: minPlugins,
    output: [
      {
        file: "dist/aselect.umd.min.js",
        format: "umd",
        name: "ASelect",
        globals,
      },
    ],
  },
];
