import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser"; // 빌드 시  압축

const config = {
  input: "src/index.js",
  output: {
    file: "lib/index.js",
    format: "cjs", //iife, cjs, esm(보통 사용되는 export { } 형태)
    // name: "rollupTest", //iife 로 지정해줄 때 필요
  },
  plugins: [
    babel(),
    resolve(),
    commonjs(),
    process.env.NODE_ENV === "production" && terser(), // yarn deploy 를 실행해줬을 때만 실행됨
  ],
  external: ["lodash"], // 라이브러리를 빼줄 때  사용
};

export default config;
