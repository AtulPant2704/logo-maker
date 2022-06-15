import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      brand: {
        500: "#ea4659",
      },
      bg: {
        500: "#232323",
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  })
);
