import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const config = {
  input: "src/index.js",
  output: {
    file: "lib/index.js",
    format: "cjs", //iife, cjs, esm(보통 사용되는 export { } 형태)
    // name: "rollupTest", //iife 로 지정해줄 때 필요
  },
  plugins: [babel(), resolve(), commonjs(), terser()],
};

export default config;
