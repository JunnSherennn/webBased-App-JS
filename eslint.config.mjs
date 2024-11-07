import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  {
    ignores: ["node_modules/**", "dist/**"], // Mengabaikan folder yang tidak perlu di-lint
},
{
    files: ["src/**/*.js"], // Hanya lint file JavaScript di dalam folder src
    languageOptions: {
        ecmaVersion: "latest",      // Gunakan versi ECMAScript terbaru
        sourceType: "module"        // Format modul ECMAScript
    },
    rules: {
        "indent": ["error", 2],     // Indentasi 2 spasi
        "quotes": ["error", "single"], // Gunakan single quotes
        "semi": ["error", "always"], // Gunakan titik koma
        // "no-console": "warn"        // Peringatkan untuk console.log
    }
}
];