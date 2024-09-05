import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    terser({
      format: {
        comments: false,
      },
    }),
  ],
};
