// Importa função principal para criar a config no formato novo (Flat Config)
import { defineConfig } from "eslint/config";

// Importa variáveis globais prontas (ex: window, document)
import globals from "globals";

// Regras base recomendadas de JavaScript
import js from "@eslint/js";

// Configurações recomendadas para TypeScript
import tseslint from "typescript-eslint";

// Plugin oficial do React
import pluginReact from "eslint-plugin-react";

// Plugin para validar regras dos Hooks (useEffect, useState, etc)
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([

  // Aplica a configuração para todos esses tipos de arquivos
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },

  // Define que o ambiente é navegador (window, document, etc)
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser
    }
  },

  // Aplica regras recomendadas do JavaScript
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"]
  },

  // Aplica regras recomendadas do TypeScript
  tseslint.configs.recommended,

  // Aplica regras recomendadas do React
  pluginReact.configs.flat.recommended,

  // Define versão do React (aqui está fake, só evita aviso)
  {
    settings: {
      react: {
        version: '999.999.999',
      },
    }
  },

  // Regras específicas para Hooks do React
  {
    files: ['**/*.{js,jsx}'],
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error', // obriga usar hooks corretamente
      'react-hooks/exhaustive-deps': 'warn', // avisa dependências faltando no useEffect
    }
  },

  // Regras personalizadas (desliga algumas regras chatas)
  {
    rules: {
      "react/prop-types": "off", // desliga prop-types (já que usa TS)
      "react/react-in-jsx-scope": "off", // não precisa importar React no topo (React 17+)
      "@typescript-eslint/explicit-module-boundary-types": "off" // não obriga tipar retorno de funções
    },
  }
]);
