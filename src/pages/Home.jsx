import { useNavigate } from "react-router-dom";
import { Flex, Heading, HStack, Input, Button } from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="12"
      h="100vh"
      bgColor="bg.500"
    >
      <Heading as="h1" size="2xl" color="white">
        Clean, simple, hassle-free logo design.
      </Heading>
      <HStack>
        <Input
          placeholder="Type your business name"
          borderRadius="32"
          w="30rem"
          paddingX="4"
          paddingY="6"
          color="white"
          fontSize="20"
          fontWeight="600"
        />
        <Button
          borderRadius="32"
          paddingX="10"
          paddingY="6"
          fontSize="20"
          onClick={() => navigate("/logofont")}
        >
          Get Started
        </Button>
      </HStack>
    </Flex>
  );
};

export { Home };
