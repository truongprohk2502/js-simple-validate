import terser from "@rollup/plugin-terser";
import { dts } from "rollup-plugin-dts";
import ts from "rollup-plugin-ts";
import { createMinifier } from "dts-minify";
import * as typescript from "typescript";

function transformDtsPlugin() {
  const minifier = createMinifier(typescript);
  return {
    name: "custom-transform",
    transform(code) {
      const transformCode = minifier.minify(code);
      return {
        code: transformCode,
        map: true
      }
    },
  };
}

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
      ts(),
      terser({
        format: {
          comments: false,
        },
      }),
    ],
  },
  {
    input: "dist/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
      },
    ],
    plugins: [transformDtsPlugin(), dts()],
  },
];

export default config;
