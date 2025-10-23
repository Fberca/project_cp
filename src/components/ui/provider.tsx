"use client";

import {
  ChakraProvider,
  createSystem,
  defineConfig,
  defaultConfig,
} from "@chakra-ui/react";
import { ReactNode } from "react";

// Configuração mínima do sistema Chakra v3
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: "#1a365d" },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
