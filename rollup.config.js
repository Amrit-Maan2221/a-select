import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const input = "src/index.js";
const isProd = process.env.NODE_ENV === "production";

const globals = {
  jquery: "jQuery",
  "@popperjs/core": "Popper",
  bootstrap: "bootstrap",
};

const external = ["jquery", "@popperjs/core", "bootstrap"];

const basePlugins = [
  resolve(),
  commonjs(),

  postcss({
    extract: "aselect.min.css",
    minimize: true,
    plugins: [
      autoprefixer(),
      cssnano({
        preset: "default",
      }),
    ],
  }),

  babel({
    babelHelpers: "bundled",
    exclude: "node_modules/**",
    babelrc: true,
  }),
];

export default [
  {
    input,
    output: {
      file: "dist/aselect.cjs.js",
      format: "cjs",
    },
    external,
    plugins: basePlugins,
  },
  {
    input,
    output: {
      file: "dist/aselect.esm.js",
      format: "esm",
    },
    external,
    plugins: basePlugins,
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
      ...basePlugins,
      isProd && terser(),
    ].filter(Boolean),
  },
];
