import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
 baseDirectory: __dirname,
});

const eslintConfig = [
 ...compat.extends(
  "next/core-web-vitals",
  "next/typescript",
  "eslint-config-prettier" // Add prettier to remove eslint errors
 ),
 {
  ignores: [
   "node_modules/**",
   ".next/**",
   "out/**",
   "build/**",
   "next-env.d.ts",
  ],
 },
 {
  rules: {
   // Add or override rules here
   "no-unused-vars": "warn", // Example: Warn on unused variables
   "react/prop-types": "off", // If you're not using prop-types
   "react/react-in-jsx-scope": "off", // Next.js doesn't require this
   "prettier/prettier": "error", //Enforce prettier rules
  },
 },
 {
  files: ["**/*.ts?(x)"], // Target TypeScript and TSX files
  parserOptions: {
   project: ["./tsconfig.json"], // Specify your tsconfig.json
  },
 },
];

export default eslintConfig;
