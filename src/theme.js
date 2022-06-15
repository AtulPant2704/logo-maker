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
    components: {
      Input: {
        variants: {
          outline: {
            field: {
              border: "2px solid white",
              _hover: {
                border: "2px solid white",
              },
              _focus: {
                border: "2px solid white",
              },
              _active: {
                border: "2px solid white",
              },
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  })
);
