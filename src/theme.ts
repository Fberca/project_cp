import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: '"Geist", sans-serif' },
        body: { value: '"Geist", sans-serif' },
      },
      fontWeights: {
        bold: { value: "700" }, // para títulos
      },
      colors: {
        brand: { 500: { value: "#e5e5e5" } },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
