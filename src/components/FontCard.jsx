import { useNavigate } from "react-router-dom";
import { Heading, GridItem } from "@chakra-ui/react";

const FontCard = () => {
  const navigate = useNavigate();

  return (
    <GridItem
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderTop="1px solid var(--chakra-colors-gray-300)"
      borderLeft="1px solid var(--chakra-colors-gray-300)"
      _hover={{ bgColor: "bg.500", color: "white" }}
      p="16"
      onClick={() => navigate("/logoicon")}
    >
      <Heading>Hello</Heading>
    </GridItem>
  );
};

export { FontCard };
