import { Image, GridItem } from "@chakra-ui/react";

const IconCard = () => {
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
      <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
    </GridItem>
  );
};

export { IconCard };
