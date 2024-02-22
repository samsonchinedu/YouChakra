/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
// import { fonts } from "./fonts";

export const theme = extendTheme({
  ...
    fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)',
    },
  ...
});