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
      p="16"
    >
      <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
    </GridItem>
  );
};

export { IconCard };
