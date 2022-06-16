import { Image, GridItem } from "@chakra-ui/react";

const IconCard = ({ images, family_name }) => {
  return (
    <GridItem
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderTop="1px solid var(--chakra-colors-gray-300)"
      borderLeft="1px solid var(--chakra-colors-gray-300)"
      _hover={{ cursor: "pointer" }}
      p="16"
    >
      <Image src={images["64"]} alt={family_name} />
    </GridItem>
  );
};

export { IconCard };
