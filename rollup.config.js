const config = {
  intput: "src/index.js",
  output: {
    file: "lib/index.js",
    format: "esm", //life, cjs, esm(보통 사용되는 export { } 형태)
    //name: "rollupTest", //life 로 지정해줄 때 필요
  },
};

export default config;
