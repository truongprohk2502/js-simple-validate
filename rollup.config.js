import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import { dts } from "rollup-plugin-dts";
import del from "rollup-plugin-delete";

const config = [
  {
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
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
  {
    input: "dist/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        exports: "named",
        sourcemap: true,
        strict: false,
      },
    ],
    plugins: [del({ targets: "dist/types" })],
  },
];

export default config;
