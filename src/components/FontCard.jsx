import { Heading, GridItem } from "@chakra-ui/react";

const FontCard = () => {
  return (
    <GridItem
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderTop="1px solid var(--chakra-colors-gray-300)"
      borderLeft="1px solid var(--chakra-colors-gray-300)"
      _hover={{ bgColor: "bg.500", color: "white" }}
      _last={{ borderBottom: "1px solid var(--chakra-colors-gray-300)" }}
      css={{
        ":nth-last-child(2)": {
          borderBottom: "1px solid var(--chakra-colors-gray-300)",
        },
      }}
      p="16"
    >
      <Heading>Hello</Heading>
    </GridItem>
  );
};

export { FontCard };
