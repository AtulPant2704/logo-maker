import { useNavigate } from "react-router-dom";
import { Flex, Heading, HStack, Input, Button } from "@chakra-ui/react";
import { useLogo } from "context";

const Home = () => {
  const navigate = useNavigate();
  const { logo, setLogo } = useLogo();

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
          maxLength="10"
          paddingX="4"
          paddingY="6"
          color="white"
          fontSize="20"
          fontWeight="600"
          value={logo.name}
          onChange={(e) =>
            setLogo((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <Button
          borderRadius="32"
          paddingX="10"
          paddingY="6"
          fontSize="20"
          onClick={() => navigate("/logofont")}
          isDisabled={logo.name === ""}
        >
          Get Started
        </Button>
      </HStack>
    </Flex>
  );
};

export { Home };
